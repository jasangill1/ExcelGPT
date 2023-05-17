'use client'
import { useState, useContext } from "react";
import { ChatContext } from "./ChatContext";

export default function InputMessage() {
    const [message, setMessage] = useState("");
    const { messages, setMessages } = useContext(ChatContext);

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleKeyPress = async (e) => {
      if (e.key === 'Enter') {
        // Immediately add user message to state
        setMessages(prevMessages => [...prevMessages, { text: message, isUser: true }]);
    
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
    };
    
      return (
        <div className="w-full p-4 flex items-center text-green-400 bg-black border-2 border-white rounded-md">
          <span className="text-2xl font-mono pr-4 pl-2">$ </span>
          <input
            className="text-2xl font-mono bg-black pl-2 flex-grow text-green-400 border-none"
            type="text"
            placeholder="Type your command..."
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
      );
      
      
      
}