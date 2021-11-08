import NavBar from "./navbar"
import Head from "next/head"
import { AnimatePresence } from "framer-motion"

export default function Layout({ children }: { children: any }) {
    return (
        <>
            <Head>
                <title>Breno Battaglin</title>
                <meta name='description' content='Personal website' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main>
                <AnimatePresence >
                    <div className="font-light overflow-hidden">
                        {children}
                    </div>
                </AnimatePresence>
            </main>

        </>
    )
}