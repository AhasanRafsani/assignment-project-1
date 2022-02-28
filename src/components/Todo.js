import React, {useState } from "react";
import {makeStyles} from "@material-ui/styles";
import {Box,Typography,Button,IconButton} from "@mui/material";
import { getTodo ,addTodo, deleteTodo,showEditBoxTodo } from "../redux/slice/todoSlice";
import {useDispatch} from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

const useStyle = makeStyles({
  parent:{
    height:"120px",
    width:"100%",
    position:"relative",
  },
  deleteButton:{
    position:"absolute",
    top:"10px",
    right:"-90%",
    zIndex:1,
  },
  todostyle:{
      position:"absolute",
      boxSizing:"border-box",
      height:"100%",
      width:"100%",
      bottom:"0px",
      backgroundColor:"rgb(255,255,255)",
      padding:"10px"
      
  } ,
 
})


const Todo = ({title,description,author,check,index,pos,setBorder})=>{

    const [selectedBox,setSelectedBox]=useState(-1);
    const [deleteEditTodoBox,setDeleteEditTodoBox] = useState(true)
    const dispatch = useDispatch();
    
    const addNewTodoHandler= (i)=>{
           dispatch(addTodo(i));
           dispatch(getTodo(i));
    }

    const handleTodo = (i)=>{
      
        if(selectedBox !== i){
           setSelectedBox(i);
           setDeleteEditTodoBox(false);
           dispatch(showEditBoxTodo(true));
          
        }
        else{
           setSelectedBox(-1)
           setDeleteEditTodoBox(true);
           
           }
           
           dispatch(getTodo(index));
    };

    const todoDelete = ()=>{
          dispatch(deleteTodo(index));
          dispatch(showEditBoxTodo(deleteEditTodoBox));
    }
    const classes = useStyle();

    return(
      <>
        <Box>
            <Box className={classes.parent} sx={{border: `${ setBorder ?" 1px solid rgba(60,197,113,0.9)": ""}`}}>
                 <IconButton className={classes.deleteButton} onClick={todoDelete}><DeleteIcon/></IconButton>
                 <Box onClick={()=>handleTodo(index)}  className={classes.todostyle} sx={{border:`${index===selectedBox? "2px solid rgba(60,197,113,0.9)":""}`}}>
                    <Typography sx={{fontSize:"15px"}}>{title}</Typography>
                    <Typography sx={{fontSize:"10px"}}>{description}</Typography>
                    <Typography sx={{fontSize:"10px"}}>{author}</Typography>
                    <Typography sx={{fontSize:"10px",backgroundColor:`${check?"rgba(60,197,113,0.7)":"rgba(255,0,0,0.5)"}`,width:"15%"}}>{ check ? "COMPLETED":"INCOMPLETED"}</Typography>
                </Box>
            </Box>
                 <Button sx={{margin:"10px 40%"}}  onClick={()=>addNewTodoHandler(index+1)} variant="contained">add</Button>
        </Box>
      </>
    );
}

export default Todo;