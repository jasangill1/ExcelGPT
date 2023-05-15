// import client and necessary hooks
import { useContext } from "react";
import { ChatContext } from "./ChatContext";
import ChatMessage from "./ChatMessage";
import xlgpt from '../images/xlgpt.png';

export default function Screen({ className }) {
  const { messages } = useContext(ChatContext);

  return (
    <div className={`${className} relative bg-black overflow-auto rounded-3xl`}>
      <div className="text-white text-xl p-4">
        {messages.length === 0 ? (
           <div>
            <pre className="font-mono text-white bg-black p-2 rounded">
              <code>
{` 
███████╗██╗  ██╗ ██████╗███████╗██╗      ██████╗ ██████╗ ████████╗
██╔════╝╚██╗██╔╝██╔════╝██╔════╝██║     ██╔════╝ ██╔══██╗╚══██╔══╝
█████╗   ╚███╔╝ ██║     █████╗  ██║     ██║  ███╗██████╔╝   ██║   
██╔══╝   ██╔██╗ ██║     ██╔══╝  ██║     ██║   ██║██╔═══╝    ██║   
███████╗██╔╝ ██╗╚██████╗███████╗███████╗╚██████╔╝██║        ██║   
╚══════╝╚═╝  ╚═╝ ╚═════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝        ╚═╝
`}
<h2 className="text-green-400 font-mono ">Data Science Assistant</h2>
        
        
        <h3 className="text-green-400 font-mono mt-4">Example Usage</h3>
        <ol className="font-mono list-decimal list-inside text-left">
            <li>Upload a CSV file containing sales data</li>
            <li>Ask ExcelAI questions</li>
            <li>Receive responses from ExcelGPT</li>
        </ol>
        <p className="font-mono mt-4">
            ExcelAI simplifies data analysis tasks by providing an intuitive conversational interface and leveraging the power of AI.
        </p>
{` 
+------------------------------------------+
|                                          |
| ExcelGPT [Version 0]                     | 
| Jasan Gill. All rights reserved.         |
| C:\\Users\\ExcelAi: welcome to ExcelAi...  |
|                                          |
+------------------------------------------+
`}
              </code>
            </pre>
            
        
           </div>

        ) : (
          messages.map((message, index) => (
            <ChatMessage key={index} message={message.text} isUser={message.isUser} />
          ))
        )}
      </div>
    </div>
  );
}
