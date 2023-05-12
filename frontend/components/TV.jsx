// components/TV.js
import React from 'react';
import Screen from './Chatscreen';
import Sidebar from './Sidebar';
import InputMessage from './InputBox';
import { ChatProvider } from "./ChatContext";

const TV = () => {
    return (
        <div className="w-[1200px] h-[700px] bg-black border-40 border-gray-800 rounded-60 relative shadow-2xl flex">
            <Sidebar />
            <ChatProvider>
                <Screen />
                <InputMessage />
            </ChatProvider>
        </div>
    );
}

export default TV;
