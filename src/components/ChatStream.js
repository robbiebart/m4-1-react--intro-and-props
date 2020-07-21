import React from "react";
import ChatMessage from "./ChatMessage";
import "./ChatStream.css";

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

const ChatStream = (props) => {
  return (
    <section className="chat-stream">
      {props.messages.map((message, index) => {
        let user = props.currentUser.username;
        let sentOrReceived = "";
        if (message.user.username === user) {
          sentOrReceived = "sent";
        } else {
          sentOrReceived = "received";
        }
        return (
          <div className="chat-stream-message">
            <ChatMessage
              key={"msg" + index}
              message={message}
              sentOrReceived={sentOrReceived}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ChatStream;

/*
if you map out elements dynamically with js without keys, it hs a hard time
*/
