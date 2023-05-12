// components/InputMessage.js
'use client'
import { useState } from "react";

export default function InputMessage() {
    const [message, setMessage] = useState("");

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
            console.log(data);
    
            // Clear the input field
            setMessage("");
        }
    };
    

    return (
        <div className="absolute bottom-[-200px] left-1/2 transform -translate-x-1/2 w-4/5 p-4 rounded-10 flex items-center text-green-400 bg-black">
            <span className="text-2xl font-mono">$</span>
            <input
                className="text-2xl font-mono bg-black pl-2 w-full text-green-400 border-none"
                type="text"
                placeholder="Type your command..."
                value={message}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
        </div>
    );
}
