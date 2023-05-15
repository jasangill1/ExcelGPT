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
          
          const res = await fetch('http://127.0.0.1:5000/send_message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message }),
          });
          const data = await res.json();
          console.log(data); 
      
          setMessage("");
         
          setMessages([...messages, { text: message, isUser: true }]);
          
         
          setMessages(prevMessages => [...prevMessages, { text: data.response, isUser: false }]);
        }
      };

      return (
        <div className="w-full p-4 flex items-center text-green-400 bg-black">
          <span className="text-2xl font-mono">$</span>
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