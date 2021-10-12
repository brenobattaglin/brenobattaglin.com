import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.css'
import NavBar from './components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Breno Battaglin</title>
        <meta name='description' content='Personal website' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
