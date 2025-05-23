import Head from 'next/head';
import React from 'react';
import Background from './background';

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Head>
        <title>Breno Battaglin</title>
        <meta name="description" content="Personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-hidden">
        <Background />
        {children}
      </main>
    </>
  );
}
