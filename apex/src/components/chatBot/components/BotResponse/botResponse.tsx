import React from "react";
import { BotResponseProps } from "../../types/types";
import "./botResponse.css";
import botIcon from "../../../../assets/images/bot/chatbot.gif";

const BotResponse: React.FC<BotResponseProps> = ({ answer }) => {
  return (
    <>
      <div className="BotResponseContainer">
        <img height={"40px"} width={"40px"} src={botIcon} />
        <span className="answerText">{answer}</span>
      </div>
    </>
  );
};

export default BotResponse;
