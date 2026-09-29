import React from 'react'
import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import { styled, Box } from "@mui/material";
import LeftSidebar from '../Screens/LeftSidebar/Index';
import RightSidebar from '../Screens/RightSidebar/Index';
import SearchField from '../Screens/CenterFeed/CenterFeedComponents/SearchField';

const HomeContainer = styled(Box)({
    display:"flex",
    justifyContent:"center",
    // background:"#DDA0DD",  
    
  });
const Main = () => {
  return (
    <div>
         <HomeContainer>
        <Grid container >
          <Grid item xs={3}>
            <div>
                <LeftSidebar/>
            </div>
            </Grid>
            <Grid item xs={6.6}>
              <SearchField/>
               <Outlet/>
   
        </Grid>
        <Grid item xs={2.4}>
            <div>
                <RightSidebar/>
            </div>
        </Grid>
        </Grid>
        </HomeContainer>
    </div>
  )
}

export default Main


  