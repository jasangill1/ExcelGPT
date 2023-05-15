// components/IntroMessage.js
import React from 'react';
import logo from '../images/xlicon.png';

const IntroMessage = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center mb-5 max-w-full overflow-auto space-y-4 bg-black text-white border-2 border-green-500 p-4 m-4 rounded-md">
        <button className="self-end text-red-500 bg-white p-1 rounded" onClick={onClose}>X</button>
        <img src={logo} alt="ExcelAI Logo" className="h-20 w-20 rounded-full"/> 

        <h2 className="text-green-400 font-mono text-center">ExcelAI - Data Science Assistant</h2>
        
        
        <h3 className="text-green-400 font-mono mt-4">Example Usage</h3>
        <ol className="font-mono list-decimal list-inside text-left">
            <li>Upload a CSV file containing sales data</li>
            <li>Ask ExcelAI questions</li>
            <li>Receive responses from ExcelAI</li>
        </ol>
        <p className="font-mono mt-4">
            ExcelAI simplifies data analysis tasks by providing an intuitive conversational interface and leveraging the power of AI.
        </p>
        
    </div>
  );
};

export default IntroMessage;