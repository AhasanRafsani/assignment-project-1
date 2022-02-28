import React from "react";
import {AppBar,Toolbar,Button,Box} from "@mui/material";
import { useHistory } from "react-router-dom";


const Header = ()=>{
    const history = useHistory();
    const homeButton = ()=>{
      history.push("/")
    }
    const formButton = ()=>{
      history.push("/form")
    }
    const infoButton = ()=>{
      history.push("/info")
    }
    const todoButton = ()=>{
      history.push("/todo")
    }
    const dropDownMenuButton = ()=>{
      history.push("/drop_down_menu")
    }
    return(
         <>
              <AppBar position="static" sx={{backgroundColor:"rgb(112,128,144)"}}>
                  <Toolbar variant="dense">
                    <Box sx={{marginLeft:"16%"}}>
                      <Button color="inherit" onClick={homeButton}>Home</Button>
                      <Button color="inherit" onClick={formButton}>My Form</Button>
                      <Button color="inherit" onClick={infoButton}>Info</Button>
                      <Button color="inherit" onClick={todoButton}>Todo</Button>
                      <Button color="inherit" onClick={dropDownMenuButton}>Dropdown Menu</Button>
                    </Box> 
                      
                  </Toolbar>
              </AppBar>
         </>
    );
}

export default Header;