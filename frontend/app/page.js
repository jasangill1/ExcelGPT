// pages/index.js
"use client"
import React, { useState } from 'react';
import Screen from '../components/Chatscreen';
import Sidebar from '../components/Sidebar';
import InputMessage from '../components/Inputbox';
import { ChatProvider } from "../components/ChatContext";
import IntroMessage from '../components/IntroMessage';
import "./globals.css"

export default function Home() {
  const [isIntroShown, setIsIntroShown] = useState(true);
  

  const handleCloseIntro = () => {
    setIsIntroShown(false);
  };



  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      {isIntroShown && (
        <div className="fixed z-10 inset-0 overflow-y-auto sm:hidden">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-25"></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <IntroMessage onClose={handleCloseIntro} />
            </div>
          </div>
        </div>
      )}
      <main className="w-full h-full flex justify-center items-center flex-grow relative bg-black border-gray-800 shadow-2xl">  
        <ChatProvider>
          <Sidebar className={'absolute left-0 top-0 bottom-0 w-full'} />
          <div className="flex flex-col h-full w-full pl-[300px] sm:pl-0 pt-4 pb-16 sm:pb-4 pr-4 overflow-auto"> 
            <Screen />
            <InputMessage className="absolute bottom-0 left-0 right-0 w-full"/>
          </div>
        </ChatProvider>
      </main>
    </div>
  );
}
