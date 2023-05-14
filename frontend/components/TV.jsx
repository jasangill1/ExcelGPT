// components/TV.js
import React from 'react';
import Screen from './Chatscreen';
import Sidebar from './Sidebar';
import InputMessage from './InputBox';
import { ChatProvider } from "./ChatContext";

const TV = () => {
    return (
        <div className="w-[1200px] h-[700px] bg-black  border-gray-800 relative shadow-2xl flex">
            <Sidebar />
            <ChatProvider>
                <div className="flex flex-col h-full">
                    <Screen className="flex-1 overflow-auto" />
                    <InputMessage />
                </div>
            </ChatProvider>
        </div>
    );
}

export default TV;
