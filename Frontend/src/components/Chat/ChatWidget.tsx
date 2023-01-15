import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { TextInput } from "./TextInput";
import { MessageLeft, MessageRight } from "./ChatMessage";

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
      overflowY: "scroll",
      height: "calc( 100% - 80px )"
    }
  })
);

export default function ChatWidget() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* <Paper className={classes.paper} zDepth={2}> */}
      <Paper className={classes.paper} >
        <Paper id="style-1" className={classes.messagesBody}>
          <MessageLeft
            message="Hello i am David's bot!"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Robot"
            avatarDisplay={true}
          />
          <MessageLeft
            message="I can help you with any question you may have concerning david, think of my as his assistant"
            timestamp="MM/DD 00:00"
            photoURL=""
            displayName=""
            avatarDisplay={false}
          />
          <MessageRight
            message="Excellent! tell me about his studies, what is his mayor?"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="you"
            avatarDisplay={true}
          />
        </Paper>
        <TextInput />
      </Paper>
    </div>
  );
}