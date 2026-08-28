"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 900;
const SPREAD = 7;

function generatePositions() {
  const arr = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    const radius = 2.4 + Math.random() * SPREAD;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = radius * Math.cos(phi);
  }
  return arr;
}

export default function IonField() {
  const pointsRef = useRef<THREE.Points>(null);
  const geometryRef = useRef<THREE.BufferGeometry>(null);

  useEffect(() => {
    geometryRef.current?.setAttribute(
      "position",
      new THREE.BufferAttribute(generatePositions(), 3)
    );
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.02;

    const attr = pointsRef.current.geometry.attributes.position as
      | THREE.BufferAttribute
      | undefined;
    if (!attr) return;

    const arr = attr.array as Float32Array;
    for (let i = 0; i < COUNT; i++) {
      const idx = i * 3 + 1;
      arr[idx] += delta * 0.02;
      if (arr[idx] > SPREAD) arr[idx] = -SPREAD;
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry ref={geometryRef} />
      <pointsMaterial
        transparent
        color="#38f2ff"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </points>
  );
}
