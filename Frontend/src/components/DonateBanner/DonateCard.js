import React, {useState} from "react"

import "./DonateCard.css"

import { FaDollarSign } from 'react-icons/fa';


import BeautyLoadingButton from "../Buttons/BeautyLoadingButton"
import CustomButton from "../MaterialUi/CustomButton"

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Container from '@material-ui/core/Container';


const DonateCard = props => {

    var [donate_value, setDonation] = useState("")
    var [monthly, setMonthly] = useState(false)

    return (
        <div className="donate_card">
            <p>
                {"Help me mantain my blog!"}
            </p>
            <div style={{flex:1, justifyItems:"center", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <Container maxWidth="sm">
                    <ButtonGroup alignItems = 'center' color="primary" aria-label="outlined primary button group">
                        <Button onClick={()=>{setDonation(1)}}>$1</Button>
                        <Button onClick={()=>{setDonation(5)}}>$5</Button>
                        <Button onClick={()=>{setDonation(10)}}>$10</Button>
                        <Button onClick={()=>{setDonation(25)}}>$25</Button>
                    </ButtonGroup>
                </Container>
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
            </div>
            
            <BeautyLoadingButton
                    style={{ width: "70%", fontSize: "16px" }}
                    is_loading={props.is_sending}
                    onClick={props.DonateClick}
                    onMouseEnter={props.onDonateHover}
                    onMouseLeave={props.onDonateNormal}
                >


                Donate Now
            </BeautyLoadingButton>
        </div>
    )

}


export default DonateCard