
import React from 'react';

import ImageSwiper from "../ImageSwiper/ImageSwiper"

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
    const prev_image_path =  props.image_vector[props.init_step].image
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    }; 

  
    return ( 
      <div>
        <div className ="centered" onClick={handleOpen}>
          <img src={prev_image_path} alt="asset not found" />
        </div>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade style={{
            flex:1, 
            justifyContent:"center",
            alignItems:"center",
            maxWidth:"100%", 
            maxHeight:"100%"}} in={open}>

            <ImageSwiper 
              onImageClicked={handleClose}
              image_vector = {props.image_vector}
              init_step = {props.init_step}
              />
          </Fade> 
        </Modal>
      </div>
    );
  }
  
  export default ZoomModal;