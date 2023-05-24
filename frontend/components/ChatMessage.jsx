function ChatMessage({ message, isUser }) {
  return (
    <div className={`my-2 text-left ${isUser ? 'text-white' : 'text-green-400'}`}>
      <div className="inline-block font-mono">
        {isUser ? '> ' : ''}
        {message}
      </div>
    </div>
  );
}

export default ChatMessage;
