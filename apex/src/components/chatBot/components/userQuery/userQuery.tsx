import React from "react";
import { UserQueryProps } from "../../types/types";
import "./userQuery.css";
import userIcon from "../../../../assets/images/bot/userQueryIcon.png";

const UserQuery: React.FC<UserQueryProps> = ({ question }) => {
  return (
    <>
      <div className="userQueryContainer">
        <span className="QuestionText">{question}</span>
        <img height={"40px"} width={"40px"} src={userIcon} />
      </div>
    </>
  );
};

export default UserQuery;
