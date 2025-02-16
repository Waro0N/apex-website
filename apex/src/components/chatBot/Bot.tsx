import React from "react";
import BotIcon from "../../assets/images/bot/bot.png";
import "./bot.css";
import ChatBox from "./components/chatBox/chatBox";

const Bot = () => {
  const [openChatBox, setOpenChatBox] = React.useState(false);
  const handleBotClick = () => {
    setOpenChatBox(!openChatBox);
  };
  return (
    <>
      <div onClick={handleBotClick} className="chatBot">
        <img src={BotIcon} />
      </div>
      <ChatBox open={openChatBox} />
    </>
  );
};

export default Bot;
