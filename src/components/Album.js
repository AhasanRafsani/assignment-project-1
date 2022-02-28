import React from "react";
import {Box,Grid,Avatar,Typography} from "@mui/material";
import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles({
  root:{
    boxSizing:"border-box",
    minHeight:"90px",
    padding:"10px",
    margin:"10px 5px 0px 3px",
    border:"1px solid black",
    width:"95%"
  },
})

const Album = ({title})=>{
    const albumImg = "https://picsum.photos/id/101/90/90";
    const classes = useStyle();
    return (
        <>
          <Box className={classes.root}>
              <Grid container spacing={1} >
                  <Grid item sx={4}>
                    <Box>
                      <Avatar src={albumImg} alt="image" variant="square" sx={{height:"70px",width:"70px",borderRadius:"5px"}}/>
                    </Box>
                  </Grid>
                  <Grid item sx={8}>
                  
                    <Typography sx={{fontSize:"14px"}}>{title}</Typography>
                   
                  </Grid>
               </Grid>
           </Box>
        </>
    );
}

export default Album;