import React from "react";
import { styled, Card } from "@mui/material";
import bgImg from "../images/FeaturedCard/card-bg-img1.png";
import bgImg2 from "../images/FeaturedCard/card-bg-img2.png";
import avtar from "../images/FeaturedCard/Avatar.png";
import members from "../images/FeaturedCard/members.svg";
import online from "../images/FeaturedCard/online.svg";

const CardWrapper = styled(Card)({
  width: "320px",
  height: "208px",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
  backgroundImage: `url(${bgImg})`,
  borderRadius: "20px",
  border: '1px solid',
    borderColor: 'rgb(1, 183, 197)',
  "& .space-maker": {
    height: "58px",
  },
  "& .inner-section": {
    backgroundImage: `url(${bgImg2})`,
    height: "150px",
    width: "320px",
  //   background: `
  //   linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
  //   radial-gradient(22.52% 54.93% at 49.06% 30.28%, #31376F 0%, rgba(137, 75, 162, 0) 100%), 
  //   conic-gradient(from 180deg at 50% 36.97%, #7976E8 -110.28deg, #F449BA 6.37deg, #0019C0 153.67deg, #7976E8 249.72deg, #F449BA 366.37deg)
  // `,
  // backdropFilter: "blur(25px)",
  },
  "& .inner-section-avtar": {
    height: "64px",
    width: "64px",
    display: "flex",
    justifyContent: "center",
    border: "3px solid transparent",
    margin: "auto",
  },
  "& .text-container__card": {
    "& h1": {
      fontSize: "22px",
      color: "white",
      paddingLeft: "12px",
      margin: "0px",
      marginTop: "-20px",
      fontWight:"600",
      fontFamily:"SF Compact Rounded",
    },
    "& p": {
      fontSize: "13px",
      paddingLeft: "12px",
      lineHeight: "15px",
      fontFamily: "Lato",
      color: "rgba(255, 255, 255, 0.55)",
      margin: "5px 0px",
    },
  },
  "& .footer__card": {

    fontSize: "12px",
    paddingLeft: "12px",
    lineHeight: "14px",
    fontFamily: "Lato",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 0.55)",
    margin: "14px 0px 0px",
    display: "flex",
    alignItems: "center",
  },
});

const FeaturedCommunityCard = () => {
  return (
    <CardWrapper>
      <div className="space-maker"></div>
      <div className="inner-section">
        <div className="inner-section-avtar">
          <div>
            <img src={avtar} alt="" />{" "}
          </div>
        </div>
        <div className="text-container__card">
          <h1>Virtual Reality</h1>
          <p>
            A community for VR and novices alike, regular and friendly chat.
          </p>
        </div>
        <div className="footer__card">
          <div style={{flex:"50%"}}>
            <img src={online} alt="" style={{ marginRight: "8px" }} />
            5,678 Online
          </div>
          <div style={{flex:"50%", display:"flex", justifyContent:"right", paddingRight:"12px"}}>
            <img src={members} alt="" style={{ marginRight: "8px" }} />
            345,678 Members
          </div>
          <div></div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default FeaturedCommunityCard;
