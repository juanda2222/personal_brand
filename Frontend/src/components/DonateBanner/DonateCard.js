import React, {useState} from "react"

import "./DonateCard.css"

import { FaDollarSign } from 'react-icons/fa';

import PaypalButton from "../Paypal/PaypalCheckoutButton"
import BeautyLoadingButton from "../Buttons/BeautyLoadingButton"
//import CustomButton from "../MaterialUi/CustomButton"

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
//import Container from '@material-ui/core/Container';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
//import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Box from '@material-ui/core/Box'

const DonateCard = props => {

    var [donate_value, setDonation] = useState("1")
    var [monthly, setMonthly] = useState("false")

    const onSuccess = (payment) =>
      console.log('Successful payment!', payment);
 
    const onError = (error) =>
      console.log('Erroneous payment OR failed to load script!', error);
 
    const onCancel = (data) =>
      console.log('Cancelled payment!', data);

    return (
        <div className="donate_card">
            <p>
                {"Help me mantain my blog!"}
            </p>
            <div>
                <Box 
                    display="flex" 
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                >
                     
                    <ButtonGroup style={{textAlign:"center"}} color="primary" aria-label="outlined primary button group">
                        <Button onClick={()=>{setDonation(1)}}>$1</Button>
                        <Button onClick={()=>{setDonation(5)}}>$5</Button>
                        <Button onClick={()=>{setDonation(10)}}>$10</Button>
                        <Button onClick={()=>{setDonation(25)}}>$25</Button>
                    </ButtonGroup>

                    <Grid style={{paddingTop:"10px", paddingBottom:"10px"}} container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <FaDollarSign/>
                        </Grid>
                        <Grid item>
                            <TextField 
                                id = "standard-adornment-amount"
                                label="Ammount" 
                                value={donate_value}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">USD</InputAdornment>,
                                }}
                                onChange={(e) => {
                                    if(!isNaN(e.target.value)) setDonation(e.target.value)
                                }}
                            />
                        </Grid>
                    </Grid>
                    <FormControl component="fieldset">
                        {/*<FormLabel component="legend">labelPlacement</FormLabel>*/}
                        <RadioGroup 
                        value={monthly} 
                        onChange={(e) => {
                            console.log(e)
                            setMonthly(e.target.value)

                        }} 
                        row 
                        aria-label="position" 
                        name="position" 
                        defaultValue="top"
                        >
                            <FormControlLabel
                            value={"false"}
                            control={<Radio color="primary" />}
                            label="One Time"
                            labelPlacement="end"
                            />
                            <FormControlLabel
                            value={"true"}
                            control={<Radio color="primary" />}
                            label="Monthly"
                            labelPlacement="end"
                            />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </div>
            <PaypalButton
            commit={true}
            currency={'USD'}
            total={donate_value}
            onSuccess={onSuccess}
            onError={onError}
            onCancel={onCancel}
            />
        </div>
    )

}


export default DonateCard