import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Torus } from '@react-three/drei'

const GeometricObject = () => {
    const mesh = useRef<THREE.Mesh>()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame(() => {
        if (mesh.current !== undefined) {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
        }
    });
    return (
        <Torus
            args={[10, 3, 16, 100]}
            ref={mesh}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <meshStandardMaterial
                attach="material"
                color={hovered ? '#2b6c76' : '#720b23'} />
        </Torus>
    );
}

export default function Background() {
    return (
        <Canvas camera={{ position: [0, 0, 35] }}
            style={{ zIndex: -1, position: 'absolute' }}>
            <ambientLight intensity={2} />
            <pointLight position={[40, 40, 40]} />
            <GeometricObject />
        </Canvas >
    )
}