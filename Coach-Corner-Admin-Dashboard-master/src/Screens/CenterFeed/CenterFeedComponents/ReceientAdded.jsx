import {styled, Box} from '@mui/material'
import React from 'react'
import ReceientAddedCard from '../../../Common/ReceientAddedCard'
import { FeedSectionWrapper } from './Banner'
const SectionWrapper = styled(Box)({
    height:"260px",
    "& .heading-cont__card":{
        textAlign: "left",
        // paddingLeft:"24px",
        display:"flex",
        width:"668px",
        // marginTop:"32px",
        marginBottom:"3px",
    },
    "& .heading":{
        fontFamily: 'SF Compact Rounded',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "22px",
        textAlign: "left",
        color: "#FFFFFF",
        padding:"12px 0px",
        flex:"50%"
        // paddingLeft:"24px",
    },
    "& .right-link__card":{
        padding:"12px 0px",
        fontFamily: 'SF Compact Rounded',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px",
        color: "#FFFFFF",
        display:"flex",
        alignItems:"end"
    },
    "& .card-container":{
        // textAlign: "left",
        // paddingLeft:"24px",
        display:"flex",
        // paddingRight:"24px",
        justifyContent:"space-between",

    }

})


const RecientAdded = () => {
  return (
    <FeedSectionWrapper>
<SectionWrapper>
    <div className='heading-cont__card'>
    <div className='heading'>
    Recient Added
    </div>
    <div className='right-link__card'>
        see all
    </div>
    </div>
    <div className='card-container'>
        <ReceientAddedCard/>
        <ReceientAddedCard/>
        <ReceientAddedCard/>
    </div>
</SectionWrapper>  </FeedSectionWrapper>
)
}

export default RecientAdded