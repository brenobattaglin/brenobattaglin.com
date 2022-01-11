import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, TorusKnot } from '@react-three/drei'

const BackgroundAnimation = () => {
    const mesh = useRef<THREE.Mesh>(null!)

    useFrame(() => {
        mesh.current.rotateX(0.005)
    });

    return (
        <Sphere
            args={[10, 6, 32, 0, 1.6, 0, 6.28]}
            ref={mesh}
        >
            <meshBasicMaterial
                color="#2e3440"
                wireframe={true}
            />
        </Sphere>
    );
}

export default function Background() {
    return (
        <Canvas
            camera={{ position: [0, 0, 35] }}
            style={{ zIndex: -1, position: 'absolute' }}
        >
            <BackgroundAnimation />
        </Canvas >
    )
}