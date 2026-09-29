import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';

const PrimeryButton = ({text, iconBack, iconNext, color="#1D203E"}) => {
  return (
    <Stack spacing={2} direction="row" style={{justifyContent:"center"}}>
    <Button variant="contained" endIcon={iconNext} startIcon={iconBack} style={{padding:"10px 30px", background: color}} >{text}</Button>
    </Stack>
  )
}

export default PrimeryButton

