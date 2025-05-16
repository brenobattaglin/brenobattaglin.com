import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';

export default function Background() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{ zIndex: -1, position: 'absolute' }}
    >
      <BackgroundAnimation />
    </Canvas>
  );
}

const BackgroundAnimation = () => {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotateY(0.001);
    mesh.current.rotateX(0.001);
    mesh.current.rotateZ(0.001);
  });

  return (
    <RoundedBox
      args={[1, 1, 2]} // Width, height, depth. Default is [1, 1, 1]
      radius={2} // Radius of the rounded corners. Default is 0.05
      smoothness={6} // The number of curve segments. Default is 4
      ref={mesh}
    >
      <meshBasicMaterial color="#2e3440" wireframe={true} />
    </RoundedBox>
  );
};
