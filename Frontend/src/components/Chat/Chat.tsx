import React, { useCallback, useState } from "react";
import Fab from '@mui/material/Fab';
import Message from '@mui/icons-material/Message';
import Box from '@mui/material/Box';
import ChatWidget from "./ChatWidget";

const ChatStyle: { [key:string]: React.CSSProperties } = { 
  rootContainer: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  },
  widgetContainer: {

  }
}

export default function Chat() {

  const [showWindow, setShowWindow] = useState(false)

  const toggleShowWindow = useCallback(() => {
    setShowWindow(prevShowWindow => {
      return !prevShowWindow
    })
  }, [])

  return (

    <Box style={ChatStyle.rootContainer}>
      <div style={showWindow ? {display: "block"}: {display: "none"}}>
        <ChatWidget/>
      </div>
      <div style={{display: "flex", justifyContent: "end", marginTop: "1rem"}}>
        <Fab color="primary" aria-label="add" onClick={toggleShowWindow}>
          <Message/>
        </Fab>
      </div>
    </Box>
  );
}
