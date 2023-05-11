import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import InputMessage from '../components/Inputbox'
import Screen from '../components/Chatscreen'
import "./globals.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray flex items-center justify-center h-screen">
        <main>
          <div className="container mx-auto box-border p-4">
            <Sidebar />
            <Screen />
            <InputMessage />
          </div>
        </main>
       </div>
    </div>
  );
}
