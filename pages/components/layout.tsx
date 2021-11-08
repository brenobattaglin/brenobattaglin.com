import NavBar from "./navbar"
import Head from "next/head"
import { AnimatePresence, motion } from "framer-motion"
import Content from "./content"

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
                {children}
            </main >
        </>
    )
}