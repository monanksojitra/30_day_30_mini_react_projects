import React, { useState } from "react";
import "./DAy22.css";

function ChatBox({ messages, onNewMessageChange, onSendMessage, role }) {
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
    onNewMessageChange(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      onSendMessage(newMessage, role);
      setNewMessage("");
    }
  };

  return (
    <div className="container py-3">
        <h4>{role}</h4>
      <div
        className="messages border p-3 mb-3 chat"
        style={{ height: "350px" }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === role ? "user" : "bot"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-area d-flex">
        <input
          type="text"
          value={newMessage}
          onChange={handleNewMessageChange}
          className="form-control me-2"
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage} className="btn btn-primary">
          Send
        </button>
      </div>
    </div>
  );
}

function Day22() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (message) => {
    setNewMessage(message);
  };

  const handleSendMessage = (message, sender) => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender }]);
    }
  };

  return (
    <div className="container d-flex">
      <ChatBox
        messages={messages}
        onNewMessageChange={handleNewMessageChange}
        onSendMessage={handleSendMessage}
        role="user"
      />
      <ChatBox
        messages={messages}
        onNewMessageChange={handleNewMessageChange}
        onSendMessage={handleSendMessage}
        role="bot"
      />
    </div>
  );
}

export default Day22;
