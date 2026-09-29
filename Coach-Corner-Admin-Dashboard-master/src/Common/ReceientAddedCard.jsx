import React from "react";
import { styled, Card } from "@mui/material";
import photo from "../images/ReceientCard/photo.svg";
import Union from "../images/ReceientCard/Union.svg";
import members from "../images/FeaturedCard/members.svg";
import PolygonComponent from "./Polygon";
import Avatar from "../images/Avatar.svg"

const CardWrapper = styled(Card)({
  width: "200px",
  height: "200px",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
  borderRadius: "20px",
  border: '1px solid',
    borderColor: 'rgb(1, 183, 197)',

  display:"flex",
  flexDirection:"column",
  background:"#01012a",
  backgroundImage: `url(${photo})`,
  "& .space-maker": {
    height:"54px"
    
  },
  "& .inner-section": {
    // backgroundImage: `url(${Union})`,
    height:"146px",
    borderRadius: "20px",
    backgroundColor:"#393D5E",
    
  },
  "& .inner-section-avtar": {
    position:"absolute",
    // height: "44px",
    // width: "44px",
    display: "flex",
    marginLeft: "128px",
    marginTop: "-21px",
  },
  "& .text-container__card": {
    "& h1": {
      fontSize: "22px",
      fontWeight:"600",
      fontFamily:"SF Compact Rounded",
      color: "white",
      // paddingLeft: "12px",
      margin: "20px 0px 0px 12px",
    },
    "& p": {
      fontSize: "13px",
      // paddingLeft: "12px",
      lineHeight: "15px",
      fontFamily: "Lato",
      color: "rgba(255, 255, 255, 0.55)",
    //   margin: "5px 0px",
      margin: "0px 12px 0px 12px",
    },
  },
  "& .footer__card": {
    position:"absolute",
    margin: "0px 0px 0px 12px",
    paddingBottom:"10px",
    fontSize: "12px",
    // paddingLeft: "12px",
    lineHeight: "14px",
    fontFamily: "Lato",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 0.55)",
    display: "flex",
    alignItems: "end",
    marginTop:"50px",
      
  },
});

const ReceientAddedCard = () => {
  return (
    <CardWrapper>
      <div className="space-maker"></div>
      <div className="inner-section">
        
        <div className="inner-section-avtar">
          <div>
          <PolygonComponent image={Avatar} polygonStyle={{ height:"44px", width:"44px", background:"#393D5E"}} imageStyle={{height:"41px", width:"41px"}}/>
          </div>
        </div>
        <div className="text-container__card">
          <h1>Movie Recapped</h1>
          <p>
          Discuss your favourite movies and TV series here.
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

export default ReceientAddedCard;
