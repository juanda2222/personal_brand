

import React, {
//  useEffect
} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //width:"100%",
    //overflow:"auto",
    //objectFit: "scale-down",
    objectFit: "contain",
  },
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

  // Similar to componentDidMount and componentDidUpdate:
  /*
  useEffect(() => {
    
    console.log("mounted")
    //add the listener when is mounted
    window.addEventListener('scroll', ()=>{setOpen(false); console.log("dssdfdfdds")} )
    
    // remove the component when is closed:
    return () => {
      window.removeEventListener('scroll', ()=>{console.log("dssds"); setOpen(false);})
    };
  });
  */

  return ( 
    <div>
      <div className ="centered" onClick={handleOpen}>
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
        onClick={handleClose}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade style={{maxWidth:"100%", maxHeight:"100%"}} in={open}>
            {props.children} 
        </Fade> 
      </Modal>
    </div>
  );
}

export default ZoomModal;