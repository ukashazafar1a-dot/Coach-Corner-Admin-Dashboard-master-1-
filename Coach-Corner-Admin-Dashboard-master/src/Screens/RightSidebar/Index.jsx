import React from "react";
import { styled, Box } from "@mui/material";
import Bell from "../../images/sidebar/sidebar2/Bell.svg";
import Chat from "../../images/sidebar/sidebar2/Chat.svg";
import Mail from "../../images/sidebar/sidebar2/Mail.svg";
import Setting from "../../images/sidebar/sidebar2/Setting.svg";
import LooprGroup from "../../images/sidebar/sidebar2/LooperGroup.svg";
import Polygon from "../../images/sidebar/polygon-user.png";
import PolygonComponent from "../../Common/Polygon";
import Avatar from "../../images/Avatar.svg";
import insta from "../../images/sidebar/sidebar2/insta.svg";
import twitter from "../../images/sidebar/sidebar2/twitter.svg";

const Wrapper = styled(Box)({
  display: "flex",
  position: "fixed",
  width: "20%",
  overflowY: "auto",
  scrollBehavior: "smooth",
  scrollbarWidth: "thin",
  flexDirection: "column",
  backgroundColor: "#2C2F48",
  boxShadow: "inset 1px 0px 0px rgba(255, 255, 255, 0.1)",
  height: "100vh",
  "& ::-webkitScrollbar": {
    // width: "5px"
  }
  ,
  
  // width: "244px",
  "& .top-menu-cont": {
    lineHeight: "14px",
    minHeight: "44px",
    color: "white",
    display: "flex",
    justifyContent: "space-evenly",
    // width: "244px",
    alignItems: "center",
    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.1)",
  },
  "& .user-img-cont": {
    height: "200px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

    "& img": {
      display: "flex",
      fontFamily: "Lato",
      justifyContent: "center",
      margin: "auto",
    },
    "& .avatar-cont": {
      display: "flex",
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "223px",
    },
  },
  "& .user-name-cont": {
    height: "62px",
    "& h1": {
      color: "white",
      fontFamily: "Lato",
      fontWeight: "700",
      fontSize: "17px",
      textAlign: "center",
      lineHeight: "0px",
    },
    "& p": {
      fontFamily: "Lato",
      fontWeight: "400",
      fontSize: "15px",
      color: "rgba(255, 255, 255, 0.25)",
      textAlign: "center",
    },
  },
  "& .new-members": {
    width: "212px",
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    "& .section-header": {
      display: "flex",
      flex: "100%",
      height: "0px",
      color: "rgba(255, 255, 255, 0.55)",
      fontFamily: "Lato",
      fontWeight: "400",
      fontSize: "15px",
      textAlign: "center",
      "& .float-left": {
        flex: "50%",
        display: "flex",
        justifyContent: "left",
        padding: "8px 0px",
      },
      "& .float-right": {
        flex: "50%",
        display: "flex",
        justifyContent: "right",
        color: "rgba(255, 255, 255, 0.25)",
        padding: "8px 0px",
      },
    },
    "& .new-member-cont-box": {
      display: "flex",
      minHeight: "60px",
      background: "rgba(255, 255, 255, 0.3)",
      borderRadius: "5px",
      marginBottom: "8px",
      "& .new-member-cont-img": {
        display: "flex",
        justifyContent: "left",
        padding: "0px 10px",
        alignItems: "center",
      },
      "& .new-member-cont-data": {
        "& h1": {
          fontFamily: "Lato",
          fontWeight: "400",
          fontSize: "13px",
          color: "white",
          textAlign: "left",
          paddingTop: "5px",
        },
        "& p": {
          color: "rgba(255, 255, 255, 0.25)",
          lineHeight: "0px",
          fontFamily: "Lato",
          fontWeight: "400",
          fontSize: "13px",
          textAlign: "left",
          marginTop: "0px",
        },
      },
    },
  },
});

const data = [
  {
    name: "Anne Couture",
    img: Polygon,
    time: "5 min ago",
  },
  {
    name: "Anne Couture",
    img: Polygon,
    time: "5 min ago",
  },
  {
    name: "Anne Couture",
    img: Polygon,
    time: "5 min ago",
  },
  {
    name: "Anne Couture",
    img: Polygon,
    time: "5 min ago",
  },
];

const RightSidebar = () => {
  return (
    <Wrapper>
      <div className="top-menu-cont">
      <button style={{background:"transparent", border:"none"}}><img src={Mail} alt="mail" /></button>
      <button style={{background:"transparent", border:"none"}}><img src={Bell} alt="Bell" /></button>
      <button style={{background:"transparent", border:"none"}}><img src={Chat} alt="Chat" /></button>
      <button style={{background:"transparent", border:"none"}}><img src={Setting} alt="Setting" /></button>
      </div>
      <div className="user-img-cont">
        <div className="avatar-cont">
          <PolygonComponent
            image={Avatar}
            polygonStyle={{ width: "124px", height: "124px" }}
            imageStyle={{ width: "122px", height: "122px" }}
          />
        </div>
        <img src={LooprGroup} alt="" />
      </div>
      <div className="user-name-cont">
        <h1>Sophie Fortune</h1>
        <p>@sophiefortune</p>
      </div>
      <div className="new-members">
        <div className="section-header">
          <div className="float-left">New Members</div>
          <div className="float-right">See all</div>
        </div>
        {data.map((item) => {
          return (
            <div className="new-member-cont-box">
              <div className="new-member-cont-img">
                <PolygonComponent
                  image={Avatar}
                  polygonStyle={{ width: "44px", height: "44px" }}
                  imageStyle={{ width: "43px", height: "43px" }}
                />
              </div>
              <div className="new-member-cont-data">
                <h1>{item.name}</h1>
                <p>{item.time}</p>
              </div>
            </div>
          );
        })}
        <div className="section-header">
          <div className="float-left">Recient Activity</div>
          <div className="float-right">See all</div>
        </div>
        {data.map((item) => {
          return (
            <div className="new-member-cont-box">
              <div className="new-member-cont-img">
                <PolygonComponent
                  image={Avatar}
                  polygonStyle={{ width: "44px", height: "44px" }}
                  imageStyle={{ width: "43px", height: "43px" }}
                />
              </div>
              <div className="new-member-cont-data">
                <h1 style={{ marginTop: "5px" }}>
                  {item.name}
                  <span style={{ color: "rgba(255, 255, 255, 0.55)" }}>
                    &nbsp;did some thing
                  </span>
                </h1>
                <p>{item.time}</p>
              </div>
            </div>
          );
        })}
        <div className="section-header">
          <div className="float-left">Follow me</div>
        </div>
        <div className="new-member-cont-box">
          <div className="new-member-cont-img">
            <img src={insta} alt="img" />
          </div>
          <div className="new-member-cont-data">
            <h1 style={{ marginTop: "15px" }}>
              <a
                href="https://www.instagram.com/aksondesign/"
                style={{ color: "white" }}
              >
                {" "}
                @ aksondesign
              </a>
            </h1>
          </div>
        </div>
        <div className="new-member-cont-box">
          <div className="new-member-cont-img">
            <img src={twitter} alt="img" />
          </div>
          <div className="new-member-cont-data">
            <h1 style={{ marginTop: "15px" }}>
              <a
                href="https://www.instagram.com/aksondesign/"
                style={{ color: "white" }}
              >
                {" "}
                @ aksondesign
              </a>
            </h1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RightSidebar;
