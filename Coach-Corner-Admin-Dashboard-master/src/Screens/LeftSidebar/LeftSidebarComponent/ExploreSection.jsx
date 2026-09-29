import React from 'react'
import { styled, Box } from "@mui/material"
import home from "../../../images/sidebar/Compass.svg"
import Entrtrainment from "../../../images/sidebar/Entertainment.svg"
import Music from "../../../images/sidebar/Music.svg"
import StudentHub from "../../../images/sidebar/StudentHub.svg"
import Tech from "../../../images/sidebar/Tech.svg"
import Education from "../../../images/sidebar/Education.svg"
import Game from "../../../images/sidebar/Game.svg"
import {Link} from "react-router-dom"
const Wrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#725d96",
    backdropFilter: "blur(10px)",
    minHeight:"calc(100vh - 153px)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

    // minHeight: "800px",
    width:"100%",
        "& .explore-heading": {
        fontSize: "17px",
        paddingLeft: "12px",
        lineHeight: "44px",
        fontFamily: "Lato",
        fontWeight: "700",
        height: "44px",
        color: "white",
        display: "flex",
        justifyConent: "left",
        alignItems: "center",
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.1)"

    },
    "& .manu-container": {
        padding: "12px 16px",
        marginBottom:"8px",
        "& :hover": {
            backgroundColor: "rgba(0, 0, 0, 0.5)",

        },
        "& .side-menu-items": {
            display: "flex",
            fontFamily: "Lato",
            fontSize: "15px",
            color: "white",
            padding: "12px 16px 0px 10px",
            lineHeight: "22px",
            borderRadius: "5px",
            height: "40px",
            "& a":{
                textDecoration:"none",
                background:"transparent",
                display:"flex",
                color:"white"        },
        }
    },
})

const data = [
    {
        text: "Home",
        img: home,
        to:"/"
    },
    {
        text: "Music",
        img: Music,
        to:"/"
    },
    {
        text: "Gaming",
        img: Game,
        to:"/"
    },
    {
        text: "Education",
        img: Education,
        to:"/"
    },
    {
        text: "Science & Tech",
        img: Tech,
        to:"/"
    },
    {
        text: "Signup",
        img: Entrtrainment,
        to:"/signup"
    },
    {
        text: "Login",
        img: StudentHub,
        to:"/login"
    }
]


const ExploreSection = () => {
    return (
        <Wrapper>
            <div className='explore-heading'>Explore</div>
            <div className='manu-container'>
                {data.map(item => {
                    return (<div className='side-menu-items'>
                <Link to={item?.to}>
                    <div style={{ background: "transparent" }} ><img src={item.img} alt="" style={{ background: "transparent", }} /></div>
                       <div style={{ paddingLeft: "10px", background: "transparent" }}>{item.text}
                    </div></Link>
                </div> )
                })}
            </div>
        </Wrapper>
    )
}

export default ExploreSection