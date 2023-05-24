import { useEffect, useContext, useRef } from "react";
import { ChatContext } from "./ChatContext";
import ChatMessage from "./ChatMessage";

export default function Screen({ className }) {
  const { messages } = useContext(ChatContext);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
    className={`${className} relative bg-color5 overflow-auto p-8 sm:p-10 lg:p-12`}
    ref={containerRef}
  >
    <div className="text-color1 text-lg sm:text-xl lg:text-2xl">
      <pre className="font-sans text-color1 bg-color4 p-3 rounded text-sm sm:text-base lg:text-lg">
        <code>
            {` 
███████╗██╗  ██╗ ██████╗███████╗██╗      ██████╗ ██████╗ ████████╗
██╔════╝╚██╗██╔╝██╔════╝██╔════╝██║     ██╔════╝ ██╔══██╗╚══██╔══╝
█████╗   ╚███╔╝ ██║     █████╗  ██║     ██║  ███╗██████╔╝   ██║   
██╔══╝   ██╔██╗ ██║     ██╔══╝  ██║     ██║   ██║██╔═══╝    ██║   
███████╗██╔╝ ██╗╚██████╗███████╗███████╗╚██████╔╝██║        ██║   
╚══════╝╚═╝  ╚═╝ ╚═════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝        ╚═╝
`}
         </code>
        </pre>
        <h2 className="text-color2 font-sans text-lg sm:text-xl lg:text-2xl">Data Science Assistant</h2>
        <h3 className="text-color2 font-sans mt-4 text-md sm:text-lg lg:text-xl">Example Usage</h3>
        <ol className="font-sans list-decimal list-inside text-left text-sm sm:text-md lg:text-lg text-color3">
          <li>Upload an EXCEL file containing data</li>
          <li>Ask ExcelGPT questions</li>
          <li>Receive responses from ExcelGPT</li>
        </ol>
        <p className="font-sans mt-4 text-sm sm:text-md lg:text-lg text-color3">
          ExcelAI simplifies data analysis tasks by providing an intuitive conversational interface and leveraging the power of AI.
        </p>
        <pre className="font-sans text-color1 bg-color4 p-3 rounded text-sm sm:text-base lg:text-lg">

          <code>
            {`ExcelGPT [Version 0] Beta                
C:\\Users\\ExcelAi: welcome to ExcelAi...  

`}
          </code>
        </pre>
      </div>
      <div className="flex-grow overflow-auto">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.text} isUser={message.isUser} />
        ))}
      </div>
    </div>
  );
}