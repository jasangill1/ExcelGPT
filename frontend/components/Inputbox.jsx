// components/InputMessage.js
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
          // Send message to the backend when Enter key is pressed
          const res = await fetch('http://127.0.0.1:5000/send_message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message }),
          });
          const data = await res.json();
          console.log(data); // Log the response data to the console
      
          // Clear the input field
          setMessage("");
          
          // Add the user's message to the messages state
          setMessages([...messages, { text: message, isUser: true }]);
          
          // Add the AI's response to the messages state
          setMessages(prevMessages => [...prevMessages, { text: data.response, isUser: false }]);
        }
      };

return (
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 p-4 rounded-10 flex items-center text-green-400 bg-black">
    <span className="text-2xl font-mono">$</span>
    <input
      className="text-2xl font-mono bg-black pl-2 w-auto text-green-400 border-none" // change here
      type="text"
      placeholder="Type your command..."
      value={message}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
    />
  </div>
);
