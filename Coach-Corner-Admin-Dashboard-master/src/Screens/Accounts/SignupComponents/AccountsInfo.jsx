import React from 'react'
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const AccountsInfo = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  return (
    <div>
<Box
        sx={{ display: "flex", flexWrap: "wrap", paddingTop:"30px" }}
        style={{ color: "white" }}
      >
        <div>
        <div style={{margin:"0px 16px"}}>
          <h1> Account Information</h1>
          <p>Enter your accounts details</p>
         
          </div>
          <FormControl sx={{ m: 2, minWidth: "330px", }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: "white", }}
            >
              User Name
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              label="User Name"
            />
          </FormControl>
          
          <FormControl sx={{ m: 2, minWidth: "330px", }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: "white", }}
            >
              Email
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              label="Email"
            />
          </FormControl>
          <br />
          <FormControl sx={{ m: 2, minWidth: "330px" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: "white" }}
            >
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          
          <FormControl sx={{ m: 2, minWidth: "330px" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: "white" }}
            >
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "Confirm Password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          
        </div>
      </Box>
    </div>
  )
}

export default AccountsInfo