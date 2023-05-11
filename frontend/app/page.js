import Head from 'next/head'
import "./globals.css"
import TV from 'components/TV'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center">  
        <div>
          <TV/>
        </div>
      </main>
    </div>
  );
}
