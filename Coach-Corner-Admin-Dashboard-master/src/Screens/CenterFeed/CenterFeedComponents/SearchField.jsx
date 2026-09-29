import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {styled, Box} from "@mui/material"
const SearchFieldWrapper = styled(Box)({
        // width:"716px",
        background:"#2C2F48",
        height:"44px",
        fontFamily: 'Lato',
        display:"fixed",
        position:"fixed",
        width:"55%",
        zIndex:"10",
        "& .search-field":{
           border: "1px solid rgba(255, 255, 255, 0.2)",
           width:"442px",
           height:"24px",
           background:"#2C2F48",
           display:"flex",
           margin:"auto",
           textAlign:"center",
        },
        "& .input-text":{
            color:"white",
            fontSize:"13px",
            fontWeight:"400"
         }
})






const  SearchField = ()=> {
//   const [inputActive, setInputActive] = useState(false);
  

 
  return (
    <SearchFieldWrapper>
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      className="search-field"
     >
       <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        style={{ color: "" }}
      >
        <SearchIcon style={{ color: "rgba(235, 235, 245, 0.6)" }} />
      </IconButton>

      <InputBase
        sx={{ ml: 1, flex: 1, color:"#FFFFFF" }}
        placeholder="Search for anything"
        inputProps={{ "aria-label": "Search by team, event, or venue" }}
        className="input-text"
      />
    </Paper></SearchFieldWrapper>
  );
}


export default SearchField