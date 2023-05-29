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
      <div className="flex justify-center items-center">
        <h3 className="font-courier text-xl sm:text-2xl lg:text-3xl pr-2">ExcelGPT</h3>
        <span className="bg-quinary text-white px-2 py-1 rounded text-sm font-courier">Beta</span>
      </div>
</div>

<div className="text-quinary text-base sm:text-lg lg:text-xl">
  <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
    <div className="bg-primary rounded-lg shadow-xl p-6 text-quinary ">
      <h2 className="font-courier text-sm sm:text-base lg:text-lg text-center font-bold pb-2">Usage</h2>
      <ul className="font-courier list-disc list-inside text-left text-xs sm:text-sm lg:text-base">
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em'}}>Upload your data file in Excel or CSV format to get started.</li>
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em'}}>Pose your questions to ExcelGPT.</li>
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em'}}>A Python agent will be generated to formulate and execute code based on your inquiries</li>
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em'}}>Retrieve your answer directly from ExcelGPT.</li>
      </ul>
    </div>

    <div className="bg-primary rounded-lg shadow-xl p-6 text-quinary">
      <h2 className="font-courier text-sm sm:text-base lg:text-lg text-center font-bold pb-2">Limitations</h2>
      <ul className="font-courier list-disc list-inside text-left text-xs sm:text-sm lg:text-base">
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em'  }}>Web version only (local version coming soon)</li>
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em'  }}>Be aware of file size limitations when uploading data</li>
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em'  }}>If a task is too time-consuming, it may result in usage timeout</li>
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em'  }}>Be mindful that ExcelGPT may make errors. Always double-check your results and conduct your own research for confirmation. </li>
      </ul>
    </div>

    <div className="bg-primary rounded-lg shadow-xl p-6 text-quinary ">
      <h2 className="font-courier text-sm sm:text-base lg:text-lg text-center font-bold pb-2">Tips</h2>
      <ul className="font-courier list-disc list-inside text-left text-xs sm:text-sm lg:text-base">
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em' }}>If the system appears to be stuck in processing mode, try refreshing your page.</li>
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em' }}>Keep your datasheets uncomplicated and clear for easy readability.</li>
        <li style={{ textIndent: '-1.3em', paddingLeft: '1em' }}>We appreciate your feedback! Please share any feature requests or improvements you'd like to see implemented on our discord.</li>
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
