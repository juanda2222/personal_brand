import React, { useCallback } from 'react'
import TextField from '@mui/material/TextField';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { useState } from 'react';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapForm : {
        display: "flex",
        justifyContent: "center",
        width: "95%",
        margin: `${theme.spacing(0)} auto`,
    },
    wrapText  : {
        width: "100%"
    },
    button: {
        //margin: theme.spacing(1),
    },
  })
);

export interface ChatInputProps {
    onSend: (message: string) => void
    disabled?: boolean
}

export const ChatInput = ({
    onSend,
    disabled = false
}: ChatInputProps) => {
    const classes = useStyles();

    // manage state for the text input
    const [ messageString, setMessageString ] = useState('')
    const onSendCallback = useCallback(() => {
        if (messageString == '') return
        
        setMessageString('')
        onSend(messageString)
    }, [messageString, onSend])

    // manage the on send event
    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessageString(event.target.value);
    };
    const handleKeyPressed = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter'){
            event.preventDefault();
        }
        if (event.key === 'Enter' && messageString !== "") {
            onSendCallback()
        }
    };

    
    return (
        <>
            <form className={classes.wrapForm}  noValidate autoComplete="off">
            <TextField
                id="standard-text"
                label="Ask something"
                className={classes.wrapText}
                variant="standard"
                //margin="normal"
                value={messageString}
                onChange={handleMessageChange}
                onKeyDown={handleKeyPressed}
                disabled={disabled}
            />
            <Button variant="contained" color="primary" className={classes.button} onClick={onSendCallback}>
                <SendIcon />
            </Button>
            </form>
        </>
    )
}



