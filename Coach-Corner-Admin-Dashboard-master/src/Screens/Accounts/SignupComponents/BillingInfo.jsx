import React from 'react'
import { Grid } from '@mui/material';
import PricingCard from './PricingCard';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";



const BillingInfo = () => {
   

  return (
    <div style={{width:"724px", paddingTop: "30px"}}>
        <div style={{ margin: "0px 16px", color:"white" }}>
            <h1> Select Plan</h1>
            <p>Select plan as per your requirments</p>
          </div>
        <Grid container>
            <Grid xs={4}>
                <PricingCard price="0" heading="Basic" text="A simple start for startsup & students" />
            </Grid>
            <Grid xs={4}>
            <PricingCard price="99" heading="Standard" text="For small and medium business"/>
            </Grid>
            <Grid xs={4}>
              <PricingCard price="999" heading="Premium" text="A solution for enterprices and organizations"/>
            </Grid>

        </Grid>
        <div style={{ margin: "20px 16px", color:"white" }}>
            <h1> Payment Information</h1>
            <p>Enter your card information</p>
          </div>
        <div style={{textAlign:"center"}}>
        <FormControl sx={{ m: 2, width: "692px" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: "white" }}
            >
              Card Number
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              label="Card Number"
            />
          </FormControl>

          <br />
          <FormControl sx={{ m: 2, minWidth: "120px" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: "white" }}
            >
              Name on Card
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              label="Name on Card"
            />
          </FormControl>
          <FormControl sx={{ m: 2, minWidth: "120px" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: "white" }}
            >
              Expiry date on Card
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              label="Expiry date on Card"
            />
          </FormControl>
          <FormControl sx={{ m: 2, maxWidth: "100px" }} variant="outlined">
            <TextField
              sx={{ color: "white" }}
              label="ccv code"
              id="outlined-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    sx={{ color: "white" }}
                    position="start"
                    style={{ color: "white" }}
                  >ccv</InputAdornment>
                ),
              }}
            />
          </FormControl>
        </div>

    </div>
  )
}

export default BillingInfo