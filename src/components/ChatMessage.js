import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  console.log("chat message props", props.message);
  let message = props.message.body;
  let user = props.message.user;
  let sentOrReceived = props.sentOrReceived

  return (
    <div className="chat-message">
      <img className="avatar" src={user.avatar} />
      <div className="user-and-message">
        <div className="username">{user.username}</div>
        <div className="message" className={`${sentOrReceived}`}>{message}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
