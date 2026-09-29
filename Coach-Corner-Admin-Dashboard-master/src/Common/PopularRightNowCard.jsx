import React from "react";
import { styled, Card } from "@mui/material";
import bgImg from "../images/PopularRightNowCard/bg-img2.png";
import bgImg2 from "../images/PopularRightNowCard/bg-img.png";
import members from "../images/FeaturedCard/members.svg";
import PolygonComponent from "./Polygon";
import Avatar from "../images/Avatar.svg"

const CardWrapper = styled(Card)({
  width: "320px",
  height: "152px",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
  // borderRadius: "20px",
  display:"flex",
  background:"#01012a",
  border: '1px solid',
    borderColor: 'rgb(1, 183, 197)',
  borderRadius: 20,
  "& .space-maker": {
    height:"152px",
    backgroundImage: `url(${bgImg})`,
    flex:"32%"
  },
  "& .inner-section": {
    // backgroundImage: `url(${bgImg2})`,
    height: "152px",
    flex:"68%",
    borderRadius: "20px",
    background:"#393D5E",
  },
  "& .inner-section-avtar": {
    position:"absolute",
    // height: "44px",
    // width: "44px",
    display: "flex",
    marginLeft: "-32px",
    width:"64px",
    height:"64px",
    marginTop:"42px"
    // margin:"auto",
  },
  "& .text-container__card": {
    "& h1": {
      fontSize: "22px",
      fontWight:"600",
      fontFamily:"SF Compact Rounded",
      color: "white",
      paddingLeft: "12px",
      margin: "25px 0px 5px 40px",
    },
    "& p": {
      fontSize: "13px",
      paddingLeft: "12px",
      lineHeight: "15px",
      fontFamily: "Lato",
      color: "rgba(255, 255, 255, 0.55)",
    //   margin: "5px 0px",
      margin: "0px 0px 0px 40px",
    },
  },
  "& .footer__card": {
    position:"absolute",
    margin: "0px 0px 5px 40px",
    fontSize: "12px",
    paddingLeft: "12px",
    lineHeight: "14px",
    fontFamily: "Lato",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 0.55)",
    display: "flex",
    alignItems: "center",
    height:"110px"    
  },
});

const PopularRightNowCard = () => {
  return (
    <CardWrapper>
      <div className="space-maker"></div>
      <div className="inner-section">
        <div className="inner-section-avtar">
        <PolygonComponent image={Avatar} polygonStyle={{width:"66px", height:"66px" }} imageStyle={{width:"62px", height:"62px"}}/>
        </div>
        
        <div className="text-container__card">
          <h1>3D Art</h1>
          <p>
          A great place to discuss art.
          </p>
        </div>
        <div className="footer__card">
          
          <div style={{ display:"flex", justifyContent:"right", paddingRight:"12px"}}>
            <img src={members} alt="" style={{ marginRight: "8px" }} />
            345,678 Members
          </div>
          <div></div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default PopularRightNowCard;
