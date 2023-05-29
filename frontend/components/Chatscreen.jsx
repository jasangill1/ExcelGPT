import { useEffect, useContext, useRef } from "react";
import { ChatContext } from "./ChatContext";
import ChatMessage from "./ChatMessage";
import "../app/globals.css"

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
      className={`${className} relative overflow-auto p-8 sm:p-10 lg:p-12 shadow-lg rounded-lg`}
      ref={containerRef}
    >
      <div className="text-center pb-4">
        
      <span className="bg-quinary text-white px-2 py-1 rounded text-xl font-bold">Beta</span>
</div>

<div className="text-quinary text-base sm:text-lg lg:text-xl">
  <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
    <div className="bg-primary rounded-lg shadow-xl p-6 text-quinary ">
      <h2 className="font-courier mt-4 text-sm sm:text-base lg:text-lg text-center font-bold pb-2">Usage</h2>
      <ul className="font-courier list-disc list-inside text-left text-xs sm:text-sm lg:text-base">
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em'}}>Upload an EXCEL file  containing data</li>
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em'}}>Ask ExcelGPT questions</li>
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em'}}>A python agent will be created to write and execute code to find your answer</li>
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em'}}>Receive answer from ExcelGPT</li>
      </ul>
    </div>

    <div className="bg-primary rounded-lg shadow-xl p-6 text-quinary">
      <h2 className="font-courier mt-4 text-sm sm:text-base lg:text-lg text-center font-bold pb-2">Limitations</h2>
      <ul className="font-courier list-disc list-inside text-left text-xs sm:text-sm lg:text-base">
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em'  }}>Web version only</li>
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em'  }}>File size is limited</li>
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em'  }}>Usage timeout if task is taking to long</li>
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em'  }}>Caution ExcelGPT is prone to error always make sure to do your own research </li>
      </ul>
    </div>

    <div className="bg-primary rounded-lg shadow-xl p-6 text-quinary ">
      <h2 className="font-courier mt-4 text-sm sm:text-base lg:text-lg text-center font-bold pb-2">Tips</h2>
      <ul className="font-courier list-disc list-inside text-left text-xs sm:text-sm lg:text-base">
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em' }}>Refresh if stuck on thinking</li>
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em' }}>Keep datasheet simple, make it easy to read</li>
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em' }}>Give feedback for features you would like added</li>
      </ul>
    </div>
  </div>
</div>


      <div className="flex-grow overflow-auto">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message.text} isUser={message.isUser} />
        ))}
      </div>
    </div>
  );
}
