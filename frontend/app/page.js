// pages/index.js
"use client"
import Screen from '../components/Chatscreen';
import Sidebar from '../components/Sidebar';
import InputMessage from '../components/Inputbox';
import { ChatProvider } from "../components/ChatContext";
import { Analytics } from '@vercel/analytics/react';



import "./globals.css"

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-color5">
      <main className="w-full h-full flex justify-center items-center flex-grow relative bg-color4 border-color3 shadow-2xl">  
        <ChatProvider>
          <Sidebar className={'absolute left-0 top-0 bottom-0 w-full'} />
          <div className="flex flex-col h-full w-full sm:pl-0 pt-4 pb-16 sm:pb-4 pr-4 overflow-auto"> 
            <Screen className='h-full'/>
            <InputMessage />
          </div>
        </ChatProvider>
        <Analytics/>
      </main>
    </div>
  );
}
