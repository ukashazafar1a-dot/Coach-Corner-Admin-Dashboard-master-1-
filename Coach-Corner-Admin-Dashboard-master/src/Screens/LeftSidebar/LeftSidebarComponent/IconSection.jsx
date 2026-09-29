import React from 'react'
import {styled, Box} from "@mui/material"
import sidebar from "../../../images/sidebar/Bar.png"
import logo1 from "../../../images/sidebar/Logo/logo1.png"
import logo2 from "../../../images/sidebar/Logo/logo2.png"
import logo3 from "../../../images/sidebar/Logo/logo3.png"
import logo4 from "../../../images/sidebar/Logo/logo4.png"
import logo5 from "../../../images/sidebar/Logo/logo5.png"
import logo6 from "../../../images/sidebar/Logo/logo6.png"


const Wrapper = styled(Box)({
        display:"flex",
        minWidth:"76px",
        flexDirection:"column",
        backgroundColor: "#b88be3",
        // backdropFilter: "blur(10px)",
        minHeight: "calc(100vh - 153px)",
        "& .color-button":{
        
        height:"auto",
        display:"flex",
        padding:"6px 6px",
        justifyContent:"space-between",
        "& .button-red":{
            width:"12px",
            height:"12px",
            background:"#ED695E",
            borderRadius:"50px"
          },
          "& .button-yellow":{
            width:"12px",
            height:"12px",
            background:"#F4BF4F",
            borderRadius:"50px"
          },
          "& .button-green":{
            width:"12px",
            height:"12px",
            background:"#61C554",
            borderRadius:"50px"
            }
       },
        
        "& .icon-section-sidebar":{
            backgroundImage:`url(${sidebar})`,
            height:"490px",
            marginLeft:"8px",
            "& .logo-1":{
              display:"flex",
              marginTop:"15px",
              justifyContent:"center"
              
            },
            "& .logos-group":{
              display:"flex",
              marginTop:"10px",
              justifyContent:"space-evenly",
              alignItems:"center",
              flexDirection:"column",
              height:"400px"
            }
          }
        })


const IconSection = () => {
  return (
    
    <Wrapper>
        <div className='color-button'>
            <span className='button-red'></span>
            <span className='button-yellow'></span>
            <span className='button-green'></span>
        </div>
        <div className='icon-section-sidebar'>
        <div className='logo-1'><img src={logo1} alt=""/></div>
        <div className='logos-group'>
          <img src={logo2} alt=""/>
          <img src={logo3} alt=""/>
          <img src={logo4} alt=""/>
          <img src={logo5} alt=""/>
          <img src={logo6} alt=""/>
        </div>
        </div>
    </Wrapper>
    )
}

export default IconSection