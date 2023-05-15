// components/IntroMessage.js
import React from 'react';

const IntroMessage = () => {
  return (
    <div className="flex flex-col items-center mb-5 max-w-full overflow-auto space-y-4">
        <h2 className="text-green-400 font-mono text-center">ExcelAI - Data Science Assistant</h2>
        <p className="infoText font-mono text-center">
        ExcelAI is a data science assistant 
        </p>
    <h3 className="text-green-400 font-mono text-center">Key Features</h3>
    <ul className="list-disc list-inside space-y-1">
        <li className="infoText font-mono">File Upload</li>
        <li className="infoText font-mono">Interactive Conversations</li>
        <li className="infoText font-mono">Data Analysis</li>
        <li className="infoText font-mono">Natural Language Processing</li>
        <li className="infoText font-mono">Seamless Integration</li>
      </ul>
      <h3 className="text-green-400 font-mono mt-4">Use Cases</h3>
      <ul className="list-disc list-inside text-left">
        <li className="infoText font-mono">Exploratory Data Analysis</li>
        <li className="infoText font-mono">Data Visualization</li>
        <li className="infoText font-mono">Statistical Analysis</li>
        <li className="infoText font-mono">Predictive Modeling</li>
      </ul>
      <h3 className="text-green-400 font-mono mt-4">Example Usage</h3>
      <ol className="list-decimal list-inside text-left">
        <li className="infoText font-mono">Upload a CSV file containing sales data</li>
        <li className="infoText font-mono">Ask ExcelAI questions</li>
        <li className="infoText font-mono">Receive responses from ExcelAI</li>
      </ol>
      <p className="infoText font-mono mt-4">
        ExcelAI simplifies data analysis tasks by providing an intuitive conversational interface and leveraging the power of AI.
      </p>
      <p className="infoText font-mono mt-2">
        Note: The above description is a general overview of ExcelAI's functionality and potential use cases. The specific capabilities and responses may vary based on the underlying language model and the specific data you are working with.
      </p>
    </div>
  );
};

export default IntroMessage;
