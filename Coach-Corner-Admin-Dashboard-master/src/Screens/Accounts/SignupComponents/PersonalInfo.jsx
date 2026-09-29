import React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";


const countries = [
  {
    label: "Pakistan",
    value: "Pakistan",
  },
  {
    label: "USA",
    value: "USA",
  },
  {
    label: "China",
    value: "China",
  },
  {
    label: "India",
    value: "India",
  },
];
const PersonalInfo = () => {
  return (
    <div>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", paddingTop: "30px" }}
        style={{ color: "white" }}
      >
        <div>
          <div style={{ margin: "0px 16px" }}>
            <h1> Personnel Information</h1>
            <p>Enter your personel details</p>
          </div>
          <FormControl sx={{ m: 2, minWidth: "330px" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: "white" }}
            >
              First Name
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              label="First Name"
            />
          </FormControl>

          <FormControl sx={{ m: 2, minWidth: "330px" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: "white" }}
            >
              Last Name
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              label="Last Name"
            />
          </FormControl>
          <br />
          <FormControl sx={{ m: 2, minWidth: "330px" }} variant="outlined">
            <TextField
              sx={{ color: "white" }}
              label="Mobile"
              id="outlined-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    sx={{ color: "white" }}
                    position="start"
                    style={{ color: "white" }}
                  >
                    +92
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 2, minWidth: "330px" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: "white" }}
            >
              Postal Code
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              label="Postal Code"
            />
          </FormControl>
          <br />
          <FormControl sx={{ m: 2, width: "692px" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: "white" }}
            >
              Address
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              label="Address"
            />
          </FormControl>
          <br />
          <FormControl sx={{ m: 2, minWidth: "330px" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: "white" }}
            >
              City
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              label="City"
            />
          </FormControl>

          <FormControl sx={{ m: 2, minWidth: "330px" }} variant="outlined">
            <TextField
              id="outlined-select-currency"
              select
              label="Select your country"
              defaultValue=""
            >
              {countries.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <br />
        </div>
      </Box>
    </div>
  );
};

export default PersonalInfo;
