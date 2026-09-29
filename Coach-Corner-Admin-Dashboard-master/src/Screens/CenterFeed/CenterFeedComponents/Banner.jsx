import React from 'react'
import {styled, Card, Box} from "@mui/material"
import BannerImg from "../../../images/Banner/Banner.png"
export const FeedSectionWrapper = styled(Box)({
  display:"flex",
    alignItems:"center",
    justifyContent:"center",
   margin:"auto",
   background:"#1D203E",
   scrollBehavior:"smooth",
   height:"100%"

})
const WrapperFeedSection = styled(Card)({
    backgroundImage: `url(${BannerImg})`,
    height:"180px",
    width:"668px",
    borderRadius:"20px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
   marginLeft:"auto",
   marginRight:"auto",
    marginTop:"74px",
    "& .text-container__banner":{
        fontFamily: 'SF Compact Rounded',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "24px",
        lineHeight: "40px",
        textAlign: "center",
        color: "#FFFFFF",
        alignItems:"center"
    }
})

const Banner = () => {
  return (
    <FeedSectionWrapper>
    <WrapperFeedSection>
        <div className='text-container__banner'>Find Your Community <br/>
on Daccord</div>
    </WrapperFeedSection></FeedSectionWrapper>
  )
}

export default Banner