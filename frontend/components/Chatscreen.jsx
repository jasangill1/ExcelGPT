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
                                                                          
ExcelGPT [Version 0]
Jasan Gill. All rights reserved.
C:\\Users\\ExcelAi: welcome to ExcelAi...`}
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
