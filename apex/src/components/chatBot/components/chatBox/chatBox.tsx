import React from "react";
import "./chatBox.css";
import { ChatBoxProps } from "../../types/types";

const ChatBox: React.FC<ChatBoxProps> = ({ open }) => {
  return (
    <>
      (
      {open && (
        <div>
          <div className="chatContainer">
            <div className="topBar">
              <div className="botHeading">
                <span className="botName">BOT</span>
                <span className="botStatus">offline</span>
              </div>
            </div>
            <div className="chatBody">
              <span>The Bot is offline currently. Will get back on soon.</span>
              <span>Thanks for the Patience.</span>
            </div>
          </div>
        </div>
      )}
      )
    </>
  );
};

export default ChatBox;
