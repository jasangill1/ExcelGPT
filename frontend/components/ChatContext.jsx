// contexts/ChatContext.js
'use client'
import { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    return (
        <ChatContext.Provider value={{ messages, setMessages }}>
            {children}
        </ChatContext.Provider>
    );
};
