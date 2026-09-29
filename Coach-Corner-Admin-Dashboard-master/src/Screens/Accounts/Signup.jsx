import React from "react";
import Tabs from "@mui/material/Tabs";
import { Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import { Box, styled } from "@mui/material";
import { PageCard, Wrapper } from "./Login";
import AccountsInfo from "./SignupComponents/AccountsInfo";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { Receipt } from "@mui/icons-material";
import PersonalInfo from "./SignupComponents/PersonalInfo";
import PrimeryButton from "../../Common/PrimeryButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import BillingInfo from "./SignupComponents/BillingInfo";

const SignUpWrapper = styled(Box)({
  display: "flex",
  justifyContent: "left",
  width: "100%",
  background: "",
  overflowY:"auto",
  // paddingTop: "50px",
  flexDirection: "column",
  "& .button-container": {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 16px",
    margin: "50px auto",
    width: "692px",
    paddingBottom:"40px"
  },
  "& .typo-style": {
    position: "absolute",
    display: "flex",
    marginTop: "25px",
    marginLeft: "80px",
    fontSize: ".8rem",
    color: "white",
    "& .Mui-selected": {
      color: "red",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "2px solid #1D203E",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "2px solid #888",
    },
    "& .MuiFormLabel-root-MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiTextField-root": {
      COLOR: "white",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .outlined-select-currency": {
      color: "white",
    },
  },
});

const Signup = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleBack = ()=>{
   if(value>0) setValue(value-1)
  }
  const handleNext = ()=>{
    if(value<2) setValue(value+1)
   }

  return (
    <PageCard>
    <Wrapper>
      <SignUpWrapper>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="icon position tabs example"
          style={{minHeight:"70px", margin:"20px 40px"}}
        >
          <Tab
            icon={<HomeIcon />}
            iconPosition="start"
            label="Account"
            text="Account"
            style={{ color: "white" }}
          >
            <Typography riant="subtitle1">Account Information</Typography>
          </Tab>
          <Tab
            icon={<PersonAddAlt1Icon />}
            iconPosition="start"
            label="Personnal"
            style={{ color: "white" }}
          >
            <Typography className="typo-style" variant="subtitle1">
              Account Information
            </Typography>
          </Tab>
          <Tab
            icon={<Receipt />}
            iconPosition="start"
            label="Billing"
            style={{ color: "white" }}
          >
            <Typography className="typo-style" variant="subtitle1">
              Account Information
            </Typography>
          </Tab>
        </Tabs>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0px 16px",
              // minHeight: "400px",
            }}
          >
            {value === 0 && <AccountsInfo />}
            {value === 1 && <PersonalInfo />}
            {value === 2 && <BillingInfo />}
          </div>
          <div className="button-container">
            <div onClick={handleBack}>
            <PrimeryButton
              text="Back"
              iconBack={<KeyboardArrowLeftIcon fontSize="small"  />}
            /> </div>
            <div onClick={handleNext}>
            <PrimeryButton
              text={value===2 ? "Submit" : "Next"}
              color={value===2 ? "#228C22" : "#1D203E"}
              iconNext={<KeyboardArrowRightIcon fontSize="small" />}
            /></div>
          </div>
        </div>
      </SignUpWrapper>
    </Wrapper>
    </PageCard>
  );
};

export default Signup;
