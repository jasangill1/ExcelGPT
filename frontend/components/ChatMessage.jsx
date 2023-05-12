// components/ChatMessage.js

function ChatMessage({ message, isUser }) {
    return (
      <div style={{ textAlign: isUser ? "right" : "left" }}>
        <p style={{ color: isUser ? "blue" : "green" }}>{message}</p>
      </div>
    );
  }
  
  export default ChatMessage;
  