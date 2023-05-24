function ChatMessage({ message, isUser }) {
  return (
    <div className={`my-4 text-left ${isUser ? 'bg-color5 p-2 rounded-lg' : ''}`}>
      <div className={`inline-block font-sans ${isUser ? 'text-color1' : 'text-color2'}`}>
        {isUser ? '> ' : ''}
        {message}
      </div>
    </div>
  );
}

export default ChatMessage;
