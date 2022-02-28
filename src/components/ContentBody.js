import React from "react";
import Layout from "../components/Layout";
import {Paper} from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
    root:{
        minHeight:"350px",
        width:"65%",
        margin:"10px auto"
    }
});

const ContentBody = ({children})=>{
    const classes = useStyle();
    return(
         
            <>
               <Paper className={classes.root}>
                    {children}
              </Paper>
            </>
     
        
    );
}

export default ContentBody;