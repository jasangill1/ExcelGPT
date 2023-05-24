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
      className={`${className} relative bg-black overflow-auto p-4 sm:p-6 lg:p-8`}
      ref={containerRef}
    >
      <div className="text-white text-lg sm:text-xl lg:text-2xl">
        <pre className="font-mono text-white bg-black p-2 rounded text-xs sm:text-sm lg:text-base hidden sm:block">
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
        <h2 className="text-green-400 font-mono text-lg sm:text-xl lg:text-2xl">Data Science Assistant</h2>
        <h3 className="text-green-400 font-mono mt-4 text-md sm:text-lg lg:text-xl">Example Usage</h3>
        <ol className="font-mono list-decimal list-inside text-left text-sm sm:text-md lg:text-lg">
          <li>Upload an EXCEL file containing data</li>
          <li>Ask ExcelGPT questions</li>
          <li>Receive responses from ExcelGPT</li>
        </ol>
        <p className="font-mono mt-4 text-sm sm:text-md lg:text-lg">
          ExcelAI simplifies data analysis tasks by providing an intuitive conversational interface and leveraging the power of AI.
        </p>
        <pre className="font-mono text-white bg-black p-2 rounded text-xs sm:text-sm lg:text-base  sm:block">
          <code>
            {` 
+------------------------------------------+
|                                          |
| ExcelGPT [Version 0] Beta                | 
|                                          |
| C:\\Users\\ExcelAi: welcome to ExcelAi...  |
|                                          |
+------------------------------------------+
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
