// components/ChatMessage.js
function ChatMessage({ message, isUser }) {
    return (
      <div className="my-2 text-left">
        <div className={`inline-block ${isUser ? 'text-blue-500' : 'text-green-500'}`}>
          {isUser ? '> ' : ''}
          {message}
        </div>
      </div>
    );
  }
  
export default ChatMessage;