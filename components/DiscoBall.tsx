"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { getLenis, prefersReducedMotion } from "./SmoothScroll";
import { createDisco } from "@/lib/disco";

// Disco ball hanging behind the name. It spins a little faster while the page scrolls,
// and rises as the hero scrolls away.
export default function DiscoBall({ heroId }: { heroId: string }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const hero = document.getElementById(heroId);
    if (!host || !hero) return;
    const reduce = prefersReducedMotion();

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    host.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(1, 1, 5);
    camera.lookAt(0, 0, 0);
    const disco = createDisco({ wire: true });

    const resize = () => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    // Only render while the hero is on screen
    let visible = true;
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(hero);

    const state = { scale: reduce ? 1 : 0, spin: 0 };
    const intro = reduce ? null : gsap.to(state, { scale: 1, duration: 1.3, ease: "back.out(1.6)", delay: 0.45 });

    let elapsed = 0;
    let last = performance.now();
    let raf = 0;
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!visible) return;
      elapsed += dt;
      const velocity = Math.abs(getLenis()?.velocity ?? 0);
      state.spin += ((reduce ? 0 : 0.2 + Math.min(velocity, 60) * 0.03) - state.spin) * 0.08;
      disco.moveLights(elapsed);
      disco.ball.rotation.y += state.spin * dt;
      const progress = Math.min(Math.max(-hero.getBoundingClientRect().top / hero.offsetHeight, 0), 1);
      disco.rig.position.y = progress * 2.5;
      disco.rig.scale.setScalar((window.innerWidth < 720 ? 0.7 : 1) * state.scale);
      renderer.render(disco.scene, camera);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      intro?.kill();
      io.disconnect();
      resizeObserver.disconnect();
      disco.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [heroId]);

  return <div ref={hostRef} className="hero-canvas" aria-hidden="true" />;
}
