import React, { useCallback, useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Paper from '@mui/material/Paper';
import { ChatInput } from "./ChatInput";
import ChatMessageList, { ChatMessageListElement } from "./ChatMessageList";
import Axios from "axios";
import robotIcon from "../../assets/robot-icon.webp"

const port = process.env.REACT_APP_NODE_PORT ? process.env.REACT_APP_NODE_PORT : 1000
const domain = process.env.REACT_APP_PRODUCTION==="true" ? "https://david.alfagenos.com": "http://localhost:" + port

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    container: {
      // width: "100vw",
      // height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      // padding: "1rem",
      overflowY: "scroll",
      height: "calc( 100% - 80px )"
    }
  })
);
const now = new Date()
const formattedDateOnLoad = now.toLocaleDateString("en-US", {month: "2-digit", day: "2-digit"}) + " " + now.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"});
const initialMessage = {
  messageType: "left" as const,
  message: "Hello i am DaVoid! an accurate copy of david's speech. You can ask me anything, i will answer in representation of david",
  timestamp: formattedDateOnLoad,
  photoURL: robotIcon,
  displayName: "DaVoid",
  avatarDisplay: true,
}

export default function ChatWidget() {

  const classes = useStyles();
  const [messages, setMessages] = useState<ChatMessageListElement[]>([
    initialMessage
  ])
  const [isLoadingChatResponse, setLoadingChatResponse] = useState(false)
  const handleSubmitMessage = async (messageText: string) => {
    const messagesForContext = messages.slice(2).map(messageData => messageData.message)
    let { data } = await Axios({
      method: 'post',
      url: domain + "/chat/message",
      data: { messages: [ ...messagesForContext, messageText ] }
        
      });
    const { responseMessage } = data
    
    // add the message on the left
    setMessages(oldMessages => {
      const now = new Date()
      const formattedDate = now.toLocaleDateString("en-US", {month: "2-digit", day: "2-digit"}) + " " + now.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"});
      return [
        ...oldMessages, 
        {
          messageType: "left" as const,
          message: responseMessage,
          timestamp: formattedDate,
          photoURL: robotIcon,
          displayName: "DaVoid",
          avatarDisplay: true,
        }
      ]
    })
    setLoadingChatResponse(false)
  }

  const addNewMessage = useCallback(async messageText => {
    setLoadingChatResponse(true)
    setMessages(oldMessages => {
      const now = new Date()
      const formattedDate = now.toLocaleDateString("en-US", {month: "2-digit", day: "2-digit"}) + " " + now.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"});
      return [
        ...oldMessages, 
        {
          messageType: "right" as const,
          message: messageText,
          timestamp: formattedDate,
          photoURL: "",
          displayName: "Guest",
          avatarDisplay: false,
        }
      ]
    })
    handleSubmitMessage(messageText)
  }, [])

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} elevation={4} >
        <Paper id="style-1" className={classes.messagesBody} elevation={0} >
          <ChatMessageList messages={messages} />
        </Paper>
        <ChatInput onSend={addNewMessage} disabled={isLoadingChatResponse} />
      </Paper>
    </div>
  );
}