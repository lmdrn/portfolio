"use client";

import { useEffect, useRef, useState } from "react"; // useState kept for hovering
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hovering, setHovering] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState<boolean | null>(null);

  useEffect(() => {
    setIsFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 2000, damping: 60, mass: 0.2 });
  const dotY = useSpring(mouseY, { stiffness: 2000, damping: 60, mass: 0.2 });
  const ringX = useSpring(mouseX, { stiffness: 350, damping: 32 });
  const ringY = useSpring(mouseY, { stiffness: 350, damping: 32 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let running = true;

    // Each frame: decay existing paint toward transparent
    const tick = () => {
      if (!running) return;
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.045)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const last = lastPos.current;
      if (!last) {
        lastPos.current = { x: e.clientX, y: e.clientY };
        return;
      }

      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 2) return;

      // Brush size scales slightly with speed
      const speed = Math.min(dist / 12, 1);
      const radius = 14 + speed * 12; // 14–26 px

      // Fill the gap between last and current position with overlapping circles
      const steps = Math.max(1, Math.round(dist / (radius * 0.45)));

      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const px = last.x + dx * t;
        const py = last.y + dy * t;

        // Slight bristle scatter — add 2 soft feathered circles per step
        for (let b = 0; b < 2; b++) {
          const bx = px + (Math.random() - 0.5) * radius * 0.35;
          const by = py + (Math.random() - 0.5) * radius * 0.35;
          const br = radius * (0.8 + Math.random() * 0.4);

          const grad = ctx.createRadialGradient(bx, by, 0, bx, by, br);
          grad.addColorStop(0, "rgba(255,45,120,0.52)");
          grad.addColorStop(0.45, "rgba(255,45,120,0.22)");
          grad.addColorStop(1, "rgba(255,45,120,0)");

          ctx.beginPath();
          ctx.arc(bx, by, br, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }
      }

      lastPos.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      setHovering(
        !!(e.target as HTMLElement).closest("a, button, [data-hover]")
      );
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [mouseX, mouseY, isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <>
      {/* Paint canvas — sits below the cursor dots */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9996, mixBlendMode: "screen" }}
      />

      {/* Dot */}
      <motion.div
        suppressHydrationWarning
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "#ff2d78",
          boxShadow: "0 0 6px 2px rgba(255,45,120,0.5)",
        }}
        animate={{ scale: hovering ? 3.5 : 1 }}
        transition={{ scale: { type: "spring", stiffness: 400, damping: 28 } }}
      />

      {/* Ring */}
      <motion.div
        suppressHydrationWarning
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1px solid rgba(255,45,120,0.35)",
        }}
        animate={{ scale: hovering ? 1.6 : 1 }}
        transition={{ scale: { type: "spring", stiffness: 300, damping: 25 } }}
      />
    </>
  );
}
