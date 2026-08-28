"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Line } from "@react-three/drei";

const ACCENT_FROM = new THREE.Color("#38f2ff");
const ACCENT_TO = new THREE.Color("#3b82f6");

function useLatticeNodes(radius: number) {
  return useMemo(() => {
    const geometry = new THREE.IcosahedronGeometry(radius, 0);
    const position = geometry.attributes.position;
    const seen = new Map<string, THREE.Vector3>();

    for (let i = 0; i < position.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(position, i);
      const key = `${v.x.toFixed(2)}_${v.y.toFixed(2)}_${v.z.toFixed(2)}`;
      if (!seen.has(key)) seen.set(key, v);
    }

    geometry.dispose();
    return Array.from(seen.values());
  }, [radius]);
}

export default function CrystalCore() {
  const groupRef = useRef<THREE.Group>(null);
  const nodes = useLatticeNodes(1.6);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial
          color="#0c1420"
          emissive="#1a4d66"
          emissiveIntensity={1.1}
          roughness={0.2}
          metalness={0.4}
        />
      </mesh>

      <mesh>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshBasicMaterial color="#38f2ff" wireframe transparent opacity={0.35} />
      </mesh>

      {nodes.map((position, i) => (
        <group key={i}>
          <mesh position={position}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshStandardMaterial
              color="#eafcff"
              emissive={i % 2 === 0 ? ACCENT_FROM : ACCENT_TO}
              emissiveIntensity={2}
            />
          </mesh>
          <Line
            points={[[0, 0, 0], [position.x, position.y, position.z]]}
            color="#3b82f6"
            transparent
            opacity={0.25}
            lineWidth={1}
          />
        </group>
      ))}
    </group>
  );
}
