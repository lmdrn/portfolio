import * as THREE from "three";

export const BALL_RADIUS = 1.6;

// The faceted lilac disco ball and its lights, shared by the hero and the nav logo.
// `wire` adds the cable and cap it hangs from.
export function createDisco({ wire }: { wire: boolean }) {
  const scene = new THREE.Scene();
  const disposables: { dispose: () => void }[] = [];
  const track = <T extends { dispose: () => void }>(item: T) => (disposables.push(item), item);

  const ball = new THREE.Mesh(
    track(new THREE.SphereGeometry(BALL_RADIUS, 16, 16)),
    track(
      new THREE.MeshStandardMaterial({
        metalness: 0.75,
        roughness: 0.45,
        color: 0xc09bd9,
        flatShading: true,
        transparent: true,
        opacity: 0.85,
      }),
    ),
  );
  const rig = new THREE.Group();
  rig.add(ball);

  if (wire) {
    const metal = track(new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.9, roughness: 0.2 }));
    const cable = new THREE.Mesh(track(new THREE.CylinderGeometry(0.007, 0.007, 5, 8)), metal);
    cable.position.y = BALL_RADIUS + 2.5;
    const cap = new THREE.Mesh(track(new THREE.CylinderGeometry(0.04, 0.04, 0.08, 16)), metal);
    cap.position.y = BALL_RADIUS;
    rig.add(cable, cap);
  }
  scene.add(rig);

  scene.add(new THREE.AmbientLight(0xefc3ff, 0.35));
  const sun = new THREE.DirectionalLight(0xffffff, 0.6);
  sun.position.set(2, 2, -1);
  scene.add(sun);
  scene.add(new THREE.HemisphereLight(0xff0066, 0xf4cccc, 0.5));
  const glow = new THREE.PointLight(0xff86cf, 0.8, 0, 2);
  glow.position.set(1, -0.5, 1);
  scene.add(glow);
  // coloured lights orbiting the ball
  const discoLights = [0xff2d78, 0xffffff, 0xcc88ff, 0xff88bb, 0xffccff].map((color) => {
    const light = new THREE.PointLight(color, 1.0, 10);
    scene.add(light);
    return light;
  });

  const moveLights = (elapsed: number) =>
    discoLights.forEach((light, i) =>
      light.position.set(
        1.8 * Math.cos(elapsed * 0.8 + i),
        1.8 * Math.sin(elapsed * 0.8 + i),
        1.8 * Math.sin(elapsed * 0.56 + i),
      ),
    );

  return { scene, ball, rig, moveLights, dispose: () => disposables.forEach((d) => d.dispose()) };
}
