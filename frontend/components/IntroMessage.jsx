// components/IntroMessage.js
import React from 'react';

const IntroMessage = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center mb-5 max-w-full overflow-auto space-y-4 bg-black text-white border-2 border-green-500 p-4 m-4 rounded-md">
        <button className="self-end text-red-500 bg-white p-1 rounded" onClick={onClose}>X</button>
        <h2 className="text-green-400 font-mono text-center">ExcelAI - Data Science Assistant</h2>
        <p className="font-mono text-center">
        ExcelAI is a data science assistant 
        </p>
        <h3 className="text-green-400 font-mono text-center">Key Features</h3>
        <ul className="font-mono list-disc list-inside space-y-1">
            <li>File Upload</li>
            <li>Interactive Conversations</li>
            <li>Data Analysis</li>
            <li>Natural Language Processing</li>
            <li>Seamless Integration</li>
        </ul>
        <h3 className="text-green-400 font-mono mt-4">Use Cases</h3>
        <ul className="font-mono list-disc list-inside text-left">
            <li>Exploratory Data Analysis</li>
            <li>Data Visualization</li>
            <li>Statistical Analysis</li>
            <li>Predictive Modeling</li>
        </ul>
        <h3 className="text-green-400 font-mono mt-4">Example Usage</h3>
        <ol className="font-mono list-decimal list-inside text-left">
            <li>Upload a CSV file containing sales data</li>
            <li>Ask ExcelAI questions</li>
            <li>Receive responses from ExcelAI</li>
        </ol>
        <p className="font-mono mt-4">
            ExcelAI simplifies data analysis tasks by providing an intuitive conversational interface and leveraging the power of AI.
        </p>
        <p className="font-mono mt-2">
            Note: The above description is a general overview of ExcelAI's functionality and potential use cases. The specific capabilities and responses may vary based on the underlying language model and the specific data you are working with.
        </p>
    </div>
  );
};

export default IntroMessage;
