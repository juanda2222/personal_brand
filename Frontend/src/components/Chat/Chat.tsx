import React from "react";
import Fab from '@mui/material/Fab';
import Message from '@mui/icons-material/Message';
import Box from '@mui/material/Box';

const ChatStyle: { [key:string]: React.CSSProperties } = { 
  container: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  }
}

export default function Chat() {
  return (
    <Box style={ChatStyle.container}>
      <Fab color="primary" aria-label="add">
        <Message />
      </Fab>
    </Box>
  );
}
