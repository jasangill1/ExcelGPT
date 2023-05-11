'use client'

import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Next.js!</h1>
        <p>This is your Home page.</p>
      </main>
    </div>
  )
}
