import React from "react";
import Header from "./Header";
import {Box} from "@mui/material";
import {makeStyles} from "@material-ui/styles";
const useStyle = makeStyles({
   root:{
      margin:"0px",
      padding:"0px",
      boxSizing:"border-box",
      backgroundColor:"rgb(245,245,245)",
      minHeight:"650px"
   },

}) 

const Layout = ({children})=>{
  const classes = useStyle();
    return(
       
          <>
             <Box className={classes.root}>
               <Header/>
                  <Box>
                    {children}
                
                  </Box>
            </Box>
          </>
      
    );
}

export default Layout;