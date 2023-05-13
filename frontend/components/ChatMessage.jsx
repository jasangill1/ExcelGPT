// components/ChatMessage.js
function ChatMessage({ message, isUser }) {
  return (
      <div className={`my-2 ${isUser ? 'text-right' : 'text-left'}`}>
          <div className={`inline-block rounded-lg px-3 py-2 ${isUser ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`}>
              {message}
          </div>
      </div>
  );
}

export default ChatMessage;
 