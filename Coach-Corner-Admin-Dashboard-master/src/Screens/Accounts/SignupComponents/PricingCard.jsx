import * as React from 'react';
import {Card, styled} from "@mui/material"
const CardWrapper = styled(Card)({
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        height:"250px", 
        margin:"30px auto",
        width:"230px",
        background:"#725d96",
        color:"white",
        "& h2":{
            justifyContent:" center",
            display:"flex",
            color:"white",},
        "& p":{
            textAlign:" center",
            display:"flex", 
            width:"150px",
            margin:"0 auto",
            opacity:".8"
        },
        "& .price-cont":{
        textAlign:"center",
        "& .price-start":{
            fontSize:"1rem",
            padding:"5px",
            opacity:".7"
        },
        "& .price-middle":{
            fontSize:"2rem",
            color:"",
            // fontWeight:"900"
        },
        "& .price-end":{
            fontSize:"1rem",
            padding:"5px",
            opacity:".7",

        }
        }

})
export default function PricingCard({heading, text, price}) {
  return (
    <div className='hover-style'>
    <CardWrapper>
        <h2>{heading}</h2>
        <p>{text}</p>
        <div className='price-cont'>
            <span className='price-start'>$</span>
            <span className='price-middle'>{price}</span>
            <span className='price-end'>/month</span>
        </div>
   </CardWrapper>
    </div>
  );
}