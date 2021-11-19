import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera, TorusKnot } from '@react-three/drei'

const BackgroundAnimation = () => {
    const mesh = useRef<THREE.Mesh>()

    useFrame(() => {
        if (mesh.current !== undefined) {
            mesh.current.rotateY(0.01)
        }
    });

    return (
        <TorusKnot
            args={[6, 2.3, 11, 3, 5, 11]}
            ref={mesh}
        >
            <meshBasicMaterial
                color="#2e3440"
                wireframe={true}
            />
        </TorusKnot>
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