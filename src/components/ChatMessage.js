import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  console.log("chat message props", props);

  if (props.messageType === "sent") {
    return (
      <div className="sent">
        <div className="body">{props.body}</div>
      </div>
    );
  } else {
    return (
      <div className="received">
        <img className="avatar" src={props.avatar} alt="avatar" />
        <div className="body">
          <div className="username">{props.user}</div>
          <div className="body">{props.body}</div>
        </div>
      </div>
    );
  }
};

export default ChatMessage;
