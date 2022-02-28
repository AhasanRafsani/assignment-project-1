import React from "react";
import {Box,Button} from "@mui/material";
import { addTodo,getTodo  } from "../redux/slice/todoSlice";
import {useDispatch} from "react-redux"

const AddTodo = ()=>{

    const dispatch = useDispatch();

    const addNewTodoHandler= (index)=>{
            dispatch(addTodo(index));
            console.log("initial Todo")
            dispatch(getTodo(index));
        }

    return(
        <>
           <Box sx={{ margin:"10px 40%"}}>
                <Button variant="contained" onClick={()=>addNewTodoHandler(0)}>Add</Button>
           </Box>
        </>
    );
}
export default AddTodo;