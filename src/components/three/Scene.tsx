"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import CrystalCore from "./CrystalCore";
import IonField from "./IonField";

function ParallaxGroup({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!groupRef.current) return;
    const targetX = -pointer.x * 0.3;
    const targetY = -pointer.y * 0.2;
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetX,
      0.05
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetY,
      0.05
    );
  });

  return <group ref={groupRef}>{children}</group>;
}

export default function Scene({ onReady }: { onReady?: () => void }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true }}
      onCreated={() => onReady?.()}
    >
      <color attach="background" args={["#05070a"]} />
      <ambientLight intensity={0.25} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#38f2ff" />
      <pointLight position={[-4, -2, -3]} intensity={20} color="#3b82f6" />

      <Suspense fallback={null}>
        <ParallaxGroup>
          <CrystalCore />
          <IonField />
        </ParallaxGroup>

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.25}
            luminanceSmoothing={0.9}
            intensity={0.45}
            mipmapBlur
          />
        </EffectComposer>
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={5.5}
        maxDistance={10}
        enableDamping
        dampingFactor={0.05}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </Canvas>
  );
}
