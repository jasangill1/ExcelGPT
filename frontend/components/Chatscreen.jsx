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
      className={`${className} relative overflow-auto p-8 sm:p-10 lg:p-12 shadow-lg rounded-lg`}
      ref={containerRef}
    >
      <div className="text-center pb-4">
        <h1 className="inline mr-2 text-quinary text-xl mb-6">Excel GPT</h1>
        <span className="bg-quinary text-white px-2 py-1 rounded text-sm">Beta</span>
      </div>

      <div className="text-quinary text-lg sm:text-xl lg:text-2xl">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <div className="bg-primary rounded-lg shadow-xl p-6 text-quinary">
            <h2 className="font-courier mt-4 text-md sm:text-lg lg:text-xl text-center text-bold pb-2">Usage</h2>
            <ul className="font-courier list-disc list-inside text-left text-sm sm:text-md lg:text-lg">
              <li style={{ textIndent: '-1em', paddingLeft: '1em' }}>Upload an EXCEL file containing data</li>
              <li >Ask ExcelGPT questions</li>
              <li style={{ textIndent: '-1.em', paddingLeft: '1em' }}>Receive responses from ExcelGPT</li>
            </ul>
          </div>

          <div className="bg-primary rounded-lg shadow-xl p-6 text-quinary">
            <h2 className="font-courier mt-4 text-md sm:text-lg lg:text-xl text-center text-bold pb-2">Limitations</h2>
            <ul className="font-courier list-disc list-inside text-left text-sm sm:text-md lg:text-lg">
              <li>Web version only</li>
              <li>File size is limited</li>
              <li style={{ textIndent: '-1.em', paddingLeft: '1em' }}s>Usage timeout if task is taking to long</li>
            </ul>
          </div>

          <div className="bg-primary rounded-lg shadow-xl p-6 text-quinary">
            <h2 className="font-courier mt-4 text-md sm:text-lg lg:text-xl text-center text-bold pb-2">Tips</h2>
            <ul className="font-courier list-disc	 list-inside text-left text-sm sm:text-md lg:text-lg">
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
