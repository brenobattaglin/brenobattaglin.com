import NavBar from "./navbar"
import Head from "next/head"
import { BufferGeometry, Line, LineBasicMaterial, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, TorusGeometry, Vector3, WebGLRenderer } from 'three';
import { useEffect } from "react";

export default function Layout({ children }: { children: any }) {
    useEffect(() => {
        const renderer = new WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
        camera.position.set(0, 0, 100);
        camera.lookAt(0, 0, 0);

        const geometry = new TorusGeometry(10, 0.1, 15, 3, 6.3);
        const material = new MeshBasicMaterial({ color: 0xffff00 });
        const torus = new Mesh(geometry, material);

        const scene = new Scene();
        scene.add(torus);

        renderer.render(scene, camera);
    }, [])

    return (
        <>
            <Head>
                <title>Breno Battaglin</title>
                <meta name='description' content='Personal website' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main>
                {children}
            </main >
        </>
    )
}