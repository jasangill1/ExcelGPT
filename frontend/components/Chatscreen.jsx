// components/Screen.js
'use client'
import { useContext } from "react";
import { ChatContext } from "./ChatContext";
import ChatMessage from "./ChatMessage";

export default function Screen() {
  const { messages } = useContext(ChatContext);

  return (
    <div className="relative w-[900px] h-full bg-gradient-to-center from-gray-700 to-black overflow-hidden float-left rounded-3xl">
      {messages.length === 0 ? (
        <div className="absolute text-green-400 text-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          Welcome to Retro TV!
        </div>
      ) : (
        <div>
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message.text} isUser={message.isUser} />
          ))}
        </div>
      )}
    </div>
  );
}
