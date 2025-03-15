import React, { useState } from "react";
import "./chatBox.css";
import { ChatBoxProps } from "../../types/types";
import UserQuery from "../userQuery/userQuery";
import BotResponse from "../BotResponse/botResponse";
import { Resizable, ResizableBox } from "react-resizable";

const ChatBox: React.FC<ChatBoxProps> = ({ open }) => {
  const [size, setSize] = useState({ width: 300, height: 400 });

  return (
    <>
      {open && (
        // <ResizableBox
        //   width={size.width}
        //   height={size.height}
        //   minConstraints={[300, 400]} // Minimum size
        //   maxConstraints={[800, 800]} // Maximum size
        //   resizeHandles={["se"]} // Resize handle at the bottom right
        //   onResizeStop={(event, data) => {
        //     console.log(`New size: ${data.size.width}x${data.size.height}`);
        //     setSize({ width: data.size.width, height: data.size.height });
        //   }}
        // >
          <div
            className="chatContainer"
            // style={{ width: `${size.width}px`, height: `${size.height}px` }}
          >
            <div className="topBar">
              <div className="botHeading">
                <span className="botName">BOT</span>
                <span className="botStatus">offline</span>
              </div>
            </div>
            <div className="chatBody">
              <UserQuery question={"This is question"} />
              <div className="AnswerBody">
                <BotResponse answer={"This is answer"} />
              </div>
            </div>
          </div>
        // </ResizableBox>
      )}
    </>
  );
};

export default ChatBox;
