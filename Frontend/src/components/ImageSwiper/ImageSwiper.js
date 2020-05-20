
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'


import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const exampleSteps = [
  {
    caption: 'San Francisco – Oakland Bay Bridge, United States',
    image:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    caption: 'Bird',
    image:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    caption: 'Bali, Indonesia',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    caption: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    image:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    caption: 'Goč, Serbia',
    image:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "100%",
    maxWidth: "100%",
    flexGrow: 1,
    
  },
  header: {
    display: 'flex',
    color:"#eeeeee",
    alignItems: 'center',
    paddingTop:"12px",
    paddingBottom:"12px",
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    maxHeight: "100%",
    maxWidth: "100%",
    display: 'block',
    overflow: 'hidden',
  },
}));

const ImageSwiper = (props) => {

  // style helpers:
  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(props.init_step ? props.init_step : 0);

  const steps_vector = props.image_vector ? props.image_vector : exampleSteps
  const maxSteps = steps_vector.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div >
      <Paper square elevation={0} className={classes.header}>
        <Typography>{steps_vector[activeStep].caption}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        style={{ flex:1, height:"300px" }}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x' /* this is for languaje support */}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval = {4000}
        autoplay = {false}
      >
        {steps_vector.map((step, index) => (
          <div key={step.caption}
          style={{maxWidth:"100%", maxHeight:"100%"}} >
            {Math.abs(activeStep - index) <= 2 ? (
              <img 
                style={{borderRadius:"0px", maxWidth:"100%", maxHeight:"100%"}} 
                //className={classes.img} 
                src={step.image} alt={step.caption} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        style={{color:"#eeeeee"}}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <IoIosArrowBack /> : <IoIosArrowForward/> /* this is for languaje support */}
          </Button>
        }
        backButton={
          <Button style={{color:"#eeeeee"}} size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <IoIosArrowForward /> : <IoIosArrowBack /> /* this is for languaje support */}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default ImageSwiper;