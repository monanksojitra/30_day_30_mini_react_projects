import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

const EmojiPickerSection = () => {
  const [inputMessage, setInputMessage] = useState("");

  const handleEmojiClick = (event, emojiObject) => {
    setInputMessage(emojiObject.emoji);
  };

  return (
    <div className="emoji-picker-section">
      <EmojiPicker width={600} onEmojiClick={handleEmojiClick} />
    </div>
  );
};

export default EmojiPickerSection;
