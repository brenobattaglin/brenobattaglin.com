import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

export default function Background() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10] }}
      style={{ zIndex: -1, position: 'absolute' }}
    >
      <BackgroundAnimation />
    </Canvas>
  );
}

const BackgroundAnimation = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  
  const particleCount = 50000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const spiralArms = 2;
    
    for (let i = 0; i < particleCount; i++) {
      const t = (i / particleCount) * Math.PI * 4; 
      const radius = Math.pow(Math.random(), 0.5) * 8; 
      const armOffset = (i % spiralArms) * (Math.PI * 2) / spiralArms;
      
      const angle = t + armOffset + radius * 0.3;
      const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.5;
      const z = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.5;
      const y = (Math.random() - 0.5) * 0.3 * radius; 
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.02;
      
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const z = positions[i3 + 2];
        const radius = Math.sqrt(x * x + z * z);
        
        const orbitalSpeed = 0.0001 / (radius + 0.1);
        const angle = Math.atan2(z, x) + orbitalSpeed;
        
        positions[i3] = Math.cos(angle) * radius;
        positions[i3 + 2] = Math.sin(angle) * radius;
        
        positions[i3 + 1] += Math.sin(time * 0.5 + radius) * 0.0005;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions}>
        <PointMaterial
          transparent
          color="#223c44"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
      
      <pointLight position={[0, 0, 0]} intensity={0.5} color="#ffeb99" distance={10} />
      <ambientLight intensity={0.1} />
    </group>
  );
};
