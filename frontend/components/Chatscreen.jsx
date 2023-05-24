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
    className={`${className} relative bg-color5 overflow-auto p-8 sm:p-10 lg:p-12 shadow-lg rounded-lg`}
    ref={containerRef}
>
    <div className="text-color1 text-lg sm:text-xl lg:text-2xl">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      <div className="bg-white rounded-lg shadow-xl p-6">
        <h3 className="text-color2 font-sans mt-4 text-md sm:text-lg lg:text-xl text-center">Usage</h3>
        <ol className="font-sans list-decimal list-inside text-left text-sm sm:text-md lg:text-lg text-color3">
          <li>Upload an EXCEL file containing data</li>
          <li>Ask ExcelGPT questions</li>
          <li>Receive responses from ExcelGPT</li>
        </ol>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-6">
        <h3 className="text-color2 font-sans mt-4 text-md sm:text-lg lg:text-xl text-center">Limitations</h3>
        <ol className="font-sans list-disc list-inside text-left text-sm sm:text-md lg:text-lg text-color3">
          <li>Web version only</li>
          <li>File size is limited</li>
          <li>Usage timeout after 30 seconds</li>
        </ol>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-6">
      <h3 className="text-color2 font-sans mt-4 text-md sm:text-lg lg:text-xl text-center">Tips</h3>
        <ol className="font-sans list-decimal list-inside text-left text-sm sm:text-md lg:text-lg text-color3">
          <li>Refresh if stuck on thinking</li>
          <li>Keep datasheet simple, make it easy to read</li>
          <li>Give feedback for feature you think are good!</li>
        </ol>
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