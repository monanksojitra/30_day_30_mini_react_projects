import React, { useState } from "react";
import axios from "axios";

function Day27() {
  const [userInput, setUserInput] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const openaiApiKey = "YOUR_OPENAI_API_KEY";

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userInput }],
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiApiKey}`,
          },
        }
      );

      const botMessage = response.data.choices[0].message.content;
      console.log(botMessage)
      setBotResponse(botMessage);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="chat-bot">
      <div className="chat-window">
        <div className="message user">{userInput}</div>
        {botResponse && <div className="message bot">{botResponse}</div>}
      </div>
      <div className="user-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={handleUserInput}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Day27;
