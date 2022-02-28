import React, { useEffect, useState } from "react";
import {Box,TextField,FormControl,FormControlLabel,Checkbox, Button} from "@mui/material";
import {useDispatch,useSelector} from "react-redux";
import { getTodo,updateTodo} from "../redux/slice/todoSlice";
import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    root:{
      boxSizing:"border-box",
      height:"200px",
      width:"80%",
      margin:"10px 10px 10px 20px"
      },
      inoutMargin:{
          marginTop:"10px"
      }
})

const EditTodo = ()=>{

    const dispatch = useDispatch();
    const [editTodo,setEditTodo]=useState({})
    
       const handleInputChange = (e)=>{
           setEditTodo({...editTodo,[e.target.name]:e.target.value});
        }

       const handleCheckBox =  (checked)=>{
           setEditTodo({...editTodo,check:checked}); 
        }

       console.log("editTodo");

        const singleTodo = useSelector((state)=>state.todoReducer.singleTodo);   
        const { title,description,author,pos,check} = singleTodo;
      
        useEffect(()=>{
           setEditTodo({ 
            title,
            description,
            author,
            pos,
            check 
           }); 
        },[singleTodo]);


        useEffect(()=>{
            dispatch(updateTodo(editTodo));
        },[editTodo]);

        const classes = useStyle();

    return(
        <>
          <Box className={classes.root}>
              
              <TextField fullWidth type="text" name="title" value={editTodo.title || ""} onChange={handleInputChange} sx={{marginTop:"5px"}}/>
              <TextField fullWidth multiline rows={3} type="text" name="description" value={editTodo.description || ""} onChange={handleInputChange} sx={{marginTop:"5px"}} />
              <TextField fullWidth type="text" name="author" value={editTodo.author || ""} onChange={handleInputChange} sx={{marginTop:"5px"}}/>
              <FormControl sx={{marginTop:"5px"}}>
                 <FormControlLabel control={<Checkbox checked={editTodo.check || false} onChange={(e)=>handleCheckBox(e.target.checked)} />} label="Completed"/>
              </FormControl>
              
          </Box>  
        </>
    );
}

export default  EditTodo;