import React from "react";
import { styled, Box } from "@mui/material";
import IconSection from "./LeftSidebarComponent/IconSection";
import frame from "../../images/sidebar/frame.svg"
import AddFriend from "../../images/sidebar/AddFriend.svg"
import Deafen from "../../images/sidebar/Deafen.svg"
import Mic from "../../images/sidebar/Mic.svg"
import PolygonComponent from "../../Common/Polygon";
import Avatar from "../../images/Avatar.svg"
import ExploreSection from "./LeftSidebarComponent/ExploreSection";

const ScrollStyle = styled("div")({
  scrollbar: {
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "2px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f4f4f4",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
    },
  },
})




const Wrapper = styled(Box)({
  position:"fixed",
  overflowY:"auto",
  overflowX:"hidden",
  scrollBehavior:"smooth",
  scrollbarWidth:"thin",
  webkitScrollbarWidth: "thin",
  scrollbarColor:"#1D203E",
  scrollbarGutter:"#1D203E",
  height: "100%",
  width:"25%",
  "& .icon-section-cont": {
    width: "100%",
    height: "100%",
  },
  "& .left-footer-cont":{
    position:"absolute",
    width:"100%",
    // bottom:"-100px",
  "& .music-footer": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height:"84px",
    border: "1.5px solid",
    borderImageSource: "linear-gradient(90deg, #00E9FF 5.65%, #FF00D8 100%)",
    borderImageSlice: "1",
    background: "rgba(16, 32, 62, 0.5)",
    // backdropFilter: "blur(25px)",
    "& img": {
      margin:"auto",
      display: "block",
      background: "linear-gradient(79.24deg, #00DAEA 19.03%, #1D138B 44.56%, #C441F4 70.21%)",
    filter: "blur(20px)",
      }
  },
  "& .icons-footer": {
    display:"flex",
    height: "72px",
    background:"#1D203E",
    marginTop:"-5px",
    boxShadow: "inset -1px 0px 0px rgba(255, 255, 255, 0.1)",
    alignItems:"center",
    "& .hug-container-left": {
      flex:"50%",
      display:"flex",
      alignItems:"center",
      
      justifyContent:"space-evenly",
      fontFamily: '"SF Compact Display"',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '15.51px',
    color:"white"
  },
  "& .hug-container-right": {
    flex:"50%",
    display:"flex",
      alignItems:"center",
      justifyContent:"space-evenly"
},
},},
    
}
);
const LeftSidebar = () => {
  return (
    <ScrollStyle>
    <Wrapper>
      <div className="icon-section-cont">
        <div style={{display:"flex", minHeight:"600px"}}>
        <IconSection />
        <ExploreSection/>
        </div>
        <div className="left-footer-cont">
        <div className="music-footer">
          <img src={frame} alt=""/>
        </div>
        
        <div className="icons-footer">
          <div className="hug-container-left">
            <PolygonComponent image={Avatar}/>
          sophiefortune</div>
          <div className="hug-container-right">
            <button style={{background:"transparent", border:"none"}}><img src={Mic} alt=""/></button>
            <button style={{background:"transparent", border:"none"}}> <img src={Deafen} alt=""/></button>
            <button style={{background:"transparent", border:"none"}}> <img src={AddFriend} alt=""/></button>
           </div>
         </div>
          </div>
        <div />
      </div>
    </Wrapper>
    </ScrollStyle>
  );
};

export default LeftSidebar;
