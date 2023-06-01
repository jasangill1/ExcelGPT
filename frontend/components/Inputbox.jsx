'use client'
import { useState, useContext } from "react";
import { ChatContext } from "./ChatContext";
import { db } from '../util/firebase';  // Adjust the path if necessary
import { addDoc, collection } from 'firebase/firestore';


export default function InputMessage() {
    const [message, setMessage] = useState("");
    const { messages, setMessages } = useContext(ChatContext);

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const sendMessage = async () => {
        // Immediately add user message to state
        setMessages(prevMessages => [...prevMessages, { text: message, isUser: true }]);

        // Log user message to Firestore
        try {
            await addDoc(collection(db, 'messages'), {
                text: message,
                timestamp: new Date().toISOString(),
                isUser: true
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        // Set message input to empty
        setMessage("");

        // Simulate a loading state for the AI response
        setMessages(prevMessages => [...prevMessages, { text: "Thinking...", isUser: false }]);

        const res = await fetch('https://flask-heroku-xlgpt.herokuapp.com/send_message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message }),
        });

        const data = await res.json();
        console.log(data);

        // Replace the loading state with the actual AI response
        setMessages(prevMessages => {
            let messagesCopy = [...prevMessages];
            messagesCopy[messagesCopy.length - 1] = { text: data.response, isUser: false };
            return messagesCopy;
        });
    }

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    const handleClick = async () => {
        sendMessage();
    };

    return (
        <div className="w-full px-4 py-2 flex items-center border-quaternary rounded ">
            <span className="text-xl font-courier pr-4 pl-2 text-primary">$ </span>
            <input
                className="text-xl font-courier pl-2 flex-grow text-primary border-none outline-none"
                type="text"
                placeholder="Ask your question"
                value={message}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <button 
                className="ml-4 bg-quinary text-white py-1 px-3 rounded text-xl font-courier hover:bg-primary transition-colors"
                onClick={handleClick}
            >
                Send
            </button>
        </div>
    );
}
