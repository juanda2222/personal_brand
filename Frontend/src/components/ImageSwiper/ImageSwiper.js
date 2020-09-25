
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'


import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "90vh",
    maxWidth: "100vw",
    flexGrow: 1,

  },
  header: {
    display: 'flex',
    color: "#eeeeee",
    alignItems: 'center',
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    maxHeight: "calc(90vh - 93px)",
    maxWidth: "100%",
  },
}));

const ImageSwiper = (props) => {

  // style helpers:
  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(props.init_step ? props.init_step : 0);

  const steps_vector = props.image_vector ? props.image_vector : [];
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
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>

        <IconButton
          style={{color:"#eeeeee", marginRight:"7px"}}
          onClick={props.onImageClicked}
          aria-label="delete"
          size="small"
        >
          <ArrowBack  style={{fontSize:"35px"}}/>
        </IconButton>


        <Typography>
          {steps_vector[activeStep].caption}
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x' /* this is for languaje support */}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
        autoplay={false}
      >
        {
          steps_vector.map((step, index) => (
            <div
              key={step.caption}
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {
                Math.abs(index - activeStep) <= 1 ? (
                  <img
                    className={classes.img}
                    src={step.image} alt={step.caption}
                  />
                ) : null
              }
            </div>
          ))
        }
      </AutoPlaySwipeableViews>
      <MobileStepper
        style={{ color: "#eeeeee" }}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            style={{ color: "#eeeeee" }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? <IoIosArrowBack /> : <IoIosArrowForward /> /* this is for languaje support */}
          </Button>
        }
        backButton={
          <Button
            style={{ color: "#eeeeee" }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === 'rtl' ? <IoIosArrowForward /> : <IoIosArrowBack /> /* this is for languaje support */}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default ImageSwiper;