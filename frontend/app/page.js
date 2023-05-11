// pages/index.js

import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import InputMessage from '../components/Inputbox'
import Screen from '../components/Chatscreen'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />
        <Screen />
        <InputMessage />
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="relative w-64 h-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gray-900"></div>
                <div className="relative w-full h-full text-center text-green-500">
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg">
                        Welcome to Retro TV!
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 h-16 w-full bg-gray-800 rounded-t-full"></div>
        </div>
      </main>
      
    </div>
  )
}
