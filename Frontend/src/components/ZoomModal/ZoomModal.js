

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  zoomed:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",
    height:"100%",
  }
}));

const ZoomModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
  setOpen(false);
  }; 

  return ( 
    <div>
      <div onClick={handleOpen}>
        {props.children} 
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div 
            className={classes.zoomed}  
            onClick={handleClose}>
            {props.children} 
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ZoomModal;