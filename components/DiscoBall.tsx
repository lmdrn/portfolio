"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function DiscoBall() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const W = window.innerWidth;
    const H = window.innerHeight;

    // ── SCENE ─────────────────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
    camera.position.set(1, 1, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    el.appendChild(renderer.domElement);

    // ── GRADIENT TEXTURE (env map + subtle background tint) ───
    const gradCanvas       = document.createElement("canvas");
    gradCanvas.width       = 512;
    gradCanvas.height      = 512;
    const gctx             = gradCanvas.getContext("2d")!;
    const grd              = gctx.createLinearGradient(0, 0, 512, 512);
    grd.addColorStop(0,   "#1a0030");
    grd.addColorStop(0.5, "#3d0025");
    grd.addColorStop(1,   "#000015");
    gctx.fillStyle = grd;
    gctx.fillRect(0, 0, 512, 512);
    const gradTex          = new THREE.CanvasTexture(gradCanvas);
    gradTex.colorSpace     = THREE.SRGBColorSpace;

    // ── DISCO BALL ────────────────────────────────────────────
    // Low-poly sphere + flatShading = visible facets, just like your reference
    const sphereGeo = new THREE.SphereGeometry(1.6, 16, 16);
    const sphereMat = new THREE.MeshStandardMaterial({
      metalness:   0.75,
      roughness:   0.45,
      color:       0xC09BD9,
      flatShading: true,
      transparent: true,
      opacity:     0.85,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.position.set(0, 0, 0);
    scene.add(sphere);

    // ── WIRE ──────────────────────────────────────────────────
    const wireLength = 5;
    const wireGeo    = new THREE.CylinderGeometry(0.007, 0.007, wireLength, 8);
    const wireMat    = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.9, roughness: 0.2 });
    const wire       = new THREE.Mesh(wireGeo, wireMat);
    // base of wire sits at top of sphere, extends up off-screen
    wire.position.set(0, 1.6 + wireLength / 2, 0);
    scene.add(wire);

    // Small cap where wire meets the ball
    const capGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.08, 16);
    const cap    = new THREE.Mesh(capGeo, wireMat);
    cap.position.set(0, 1.6, 0);
    scene.add(cap);

    // ── LIGHTS ────────────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xefc3ff, 0.35);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(2, 2, -1);
    scene.add(directionalLight);

    const hemisphereLight = new THREE.HemisphereLight(0xff0066, 0xf4cccc, 0.5);
    scene.add(hemisphereLight);

    const pointLight = new THREE.PointLight(0xff86cf, 0.8, 0, 2);
    pointLight.position.set(1, -0.5, 1);
    scene.add(pointLight);

    // Orbiting disco lights — same principle as your reference
    const discoColors = [0xff2d78, 0xffffff, 0xcc88ff, 0xff88bb, 0xffccff];
    const discoLights = discoColors.map((color) => {
      const l = new THREE.PointLight(color, 1.0, 10);
      scene.add(l);
      return l;
    });

    // ── ANIMATION ─────────────────────────────────────────────
    const clock = new THREE.Clock();
    const ORBIT_RADIUS = 1.8;
    const ORBIT_SPEED  = 0.8;
    let raf: number;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      // Disco lights orbit around the ball (same as your reference)
      discoLights.forEach((light, i) => {
        light.position.set(
          ORBIT_RADIUS * Math.cos(t * ORBIT_SPEED + i),
          ORBIT_RADIUS * Math.sin(t * ORBIT_SPEED + i),
          ORBIT_RADIUS * Math.sin(t * ORBIT_SPEED * 0.7 + i)
        );
      });

      sphere.rotation.y = 0.2 * t;

      renderer.render(scene, camera);
    };
    tick();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      sphereGeo.dispose();
      sphereMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      capGeo.dispose();
      gradTex.dispose();
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
