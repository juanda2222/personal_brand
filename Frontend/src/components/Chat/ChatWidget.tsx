import React, { useCallback, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Paper from '@mui/material/Paper';
import { ChatInput } from "./ChatInput";
import ChatMessageList from "./ChatMessageList";

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

export default function ChatWidget() {
  const classes = useStyles();
  const [messages, setMessages] = useState([
    {
      messageType: "left" as const,
      message: "Hello i am David's bot!",
      timestamp: "MM/DD 00:00",
      photoURL: "https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s: s96-c",
      displayName: "Robot",
      avatarDisplay: true,
    },{
      messageType: "left" as const,
      message: "I can help you with any question you may have concerning david, think of my as his assistant",
      timestamp: "MM/DD 00:00",
      photoURL: "",
      displayName: "",
      avatarDisplay: false,
    },{
      messageType: "right" as const,
      message: "Excellent! tell me about his studies, what is his mayor?",
      timestamp: "MM/DD 00:00",
      photoURL: "https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s: s96-c",
      displayName: "you",
      avatarDisplay: true,
    }
  ])

  const addNewMessage = useCallback(messageText => {
    setMessages(oldMessages => {
      const now = new Date()
      const formattedDate = now.toLocaleDateString("en-US", {month: "2-digit", day: "2-digit"}) + " " + now.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"});
      return [
        ...oldMessages, 
        {
          messageType: "right",
          message: messageText,
          timestamp: formattedDate,
          photoURL: "",
          displayName: "",
          avatarDisplay: false,
        }
      ]
    })
  }, [])

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} elevation={4} >
        <Paper id="style-1" className={classes.messagesBody} elevation={0} >
          <ChatMessageList messages={messages} />
        </Paper>
        <ChatInput onSend={addNewMessage} />
      </Paper>
    </div>
  );
}