import React from "react";
import {Grid,Box,Avatar,Typography} from "@mui/material";
import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
   root:{
     boxSizing:"border-box",
     minHeight:"90px",
     padding:"10px",
     margin:"10px 0px 0px 17px",
     border:"1px solid black",
     width:"95%"
   },
})

const User = ({name,email,phone,address})=>{
    const userImg = "https://picsum.photos/id/1005/90/90";
    const classes = useStyle();
    return (
        <>
           <Box className={classes.root} >
             <Grid container spacing={1} >
                <Grid item sx={4}>
                    <Box>
                      <Avatar src={userImg} alt="image" variant="square" sx={{height:"70px",width:"70px", borderRadius:"5px"}}/>
                    </Box>
                 </Grid>
                 <Grid item sx={8}>
                   
                      <Typography sx={{fontSize:"15px"}} >{name}</Typography>
                      <Typography sx={{fontSize:"10px"}} >{email}</Typography>
                      <Typography sx={{fontSize:"10px"}} >{phone}</Typography>
                      <Typography sx={{fontSize:"10px"}} >{address}</Typography>
                  
                 </Grid>
             </Grid>
          </Box>
        </>
    );
}

export default User;