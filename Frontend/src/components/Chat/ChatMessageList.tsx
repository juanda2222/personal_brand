import React from "react";
import { MessageLeft, MessageRight, MessageProps } from "./ChatMessage";

interface ChatMessageListElement extends MessageProps{
  messageType: "left" | "right"
}

type ChatMessageListProps = {
  messages: ChatMessageListElement[]
}

export default function ChatMessageList(props: ChatMessageListProps) {
  const { messages } = props
  return (
    <React.Fragment>
      {messages.map(message => {
        const { messageType, ...messageProps } = message
        return messageType === "left" ? (
          <MessageLeft key={messageProps.timestamp} {...messageProps}/> 
        ):(
          <MessageRight key={messageProps.timestamp} {...messageProps}/>
        )
      })}
    </React.Fragment>
  );
}