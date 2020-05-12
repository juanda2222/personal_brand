import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



export default function CustomButton( props ) {
  

  return (
  
      <Button variant="contained" color="primary">{props.children}</Button>
  
  );
}