import * as React from "react";
import Box from "@mui/material/Box";
import { styled, Card } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PrimeryButton from "../../Common/PrimeryButton";
export const PageCard = styled(Card)({
            display:"flex",
            height:"100%",
            width:"100%",
            justifyContent:"center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius:"0px",

})
export const Wrapper = styled(Box)({
  display: "flex",
  background:
    "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), radial-gradient(38.46% 59.68% at 50.94% 20.73%, #31376F 0%, rgba(137, 75, 162, 0) 72.64%) , conic-gradient(from 187.44deg at 50.78% 32.18%, #F449F4 0deg, #0019C0 148.13deg, #7976E8 250.02deg, #F449F4 360deg)",
  backdropFilter: "blur(25px)",
  justifyContent: "center",
  height:"100%",
  width:"100%",
  "& .MuiAutocomplete-input":{
    background:"red"
},
  "& .heading-login": {
    width:"400px",
    fontFamily: "SF Compact Rounded",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "22px",
    textAlign: "center",
    color: "#FFFFFF",
    lineHeight:"35px"
  },
  "& .MuiOutlinedInput-notchedOutline":{
    border: "2px solid #1D203E"
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
    border: "2px solid #888" ,
    },
  "& .MuiTypography-root":{
    color:"white"
        },
        "& .MuiTextField-root":{
            COLOR:"white"
          },
      "& .MuiInputLabel-root":{
        color:"white"
      },
     
    // input:-internal-autofill-selected {
    //     appearance: menulist-button;
    //     background-image: none !important;
    //     background-color: -internal-light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4)) !important;
    //     color: fieldtext !important;
    // }
});

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <PageCard>
    <Wrapper>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", justifyContent:"center", alignItems:"center"}}
        style={{ color: "white" }}
      >
        <div>
          <h1 className="heading-login">Welcome back! Please enter your login credentials to access your account</h1>
          <br />

          <FormControl sx={{ m: 2, width: "400px", }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              style={{ color: "white", }}
            >
              Your Email
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              label="Your Email"
            />
          </FormControl>
          <br />
          <FormControl sx={{ m: 2, width: "400px" }} variant="outlined">
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
          <br />
          <div style={{ textAlign: "center" }}>
            <PrimeryButton text="Login"/>
          </div>
        </div>
      </Box>
    </Wrapper></PageCard>
  );
};

export default Login;
