function ChatMessage({ message, isUser }) {
  return (
    <div className="my-2 text-left">
      <div className={`inline-block ${isUser ? 'text-white-400' : 'text-green-400'} font-mono`}>
        {isUser ? '> ' : ''}
        {message}
      </div>
    </div>
  );
}

export default ChatMessage;
