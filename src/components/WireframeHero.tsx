import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Architectural wireframe hero backdrop.
 * Rotating polyhedra, orbiting nodes, and a receding grid plane —
 * blueprint aesthetic tuned to the "Carbon & Electric" palette.
 */

const ELECTRIC = "#2563eb";
const ELECTRIC_SOFT = "#3b82f6";
const LINE = "#1e293b";

function CorePolyhedron() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (!group.current) return;
    group.current.rotation.x += dt * 0.08;
    group.current.rotation.y += dt * 0.12;
  });
  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial color={ELECTRIC} wireframe transparent opacity={0.55} />
      </mesh>
      <mesh scale={1.02}>
        <icosahedronGeometry args={[1.4, 0]} />
        <meshBasicMaterial color={ELECTRIC_SOFT} wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

function OrbitRing({ radius, tilt, speed }: { radius: number; tilt: [number, number, number]; speed: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * speed;
  });
  return (
    <group ref={ref} rotation={tilt}>
      <mesh>
        <torusGeometry args={[radius, 0.005, 8, 128]} />
        <meshBasicMaterial color={ELECTRIC} transparent opacity={0.45} />
      </mesh>
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial color={ELECTRIC_SOFT} />
      </mesh>
    </group>
  );
}

function GridPlane() {
  const geo = useMemo(() => {
    const size = 12;
    const divisions = 24;
    const g = new THREE.BufferGeometry();
    const verts: number[] = [];
    const step = size / divisions;
    for (let i = 0; i <= divisions; i++) {
      const p = -size / 2 + i * step;
      verts.push(-size / 2, 0, p, size / 2, 0, p);
      verts.push(p, 0, -size / 2, p, 0, size / 2);
    }
    g.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    return g;
  }, []);
  return (
    <lineSegments geometry={geo} position={[0, -2.2, 0]} rotation={[0, 0, 0]}>
      <lineBasicMaterial color={LINE} transparent opacity={0.35} />
    </lineSegments>
  );
}

function Nodes() {
  const positions = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2;
      const r = 2.6 + Math.sin(i * 1.7) * 0.4;
      arr.push([Math.cos(a) * r, Math.sin(i * 0.9) * 1.2, Math.sin(a) * r]);
    }
    return arr;
  }, []);
  return (
    <group>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <boxGeometry args={[0.06, 0.06, 0.06]} />
          <meshBasicMaterial color={ELECTRIC_SOFT} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <GridPlane />
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <CorePolyhedron />
      </Float>
      <OrbitRing radius={2.1} tilt={[Math.PI / 2.4, 0, 0]} speed={0.25} />
      <OrbitRing radius={2.6} tilt={[Math.PI / 3, Math.PI / 5, 0]} speed={-0.18} />
      <OrbitRing radius={3.1} tilt={[Math.PI / 2, Math.PI / 3, 0]} speed={0.12} />
      <Nodes />
    </>
  );
}

export function WireframeHero({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.6, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}