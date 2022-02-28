import React from "react";
import {Box,Typography} from "@mui/material";
import {makeStyles} from "@material-ui/styles";
import {useSelector} from "react-redux";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const useStyle = makeStyles({
    root:{
      boxSizing:"border-box",
      minHeight:"60px",
      width:"100%",
      backgroundColor:"rgb(220,220,220)",
      margin:"8px",
      padding:"10px"
    }
})

   
const TodoList = ()=>{

    
    const allTodo = useSelector((state)=>state.todoReducer.todo);
    const singleTodoIndex = useSelector((state)=>state.todoReducer.singleTodoIndex);
    const classes = useStyle();
    
    return(

      <>

         < Box className={classes.root}>

              <Typography>TodoList</Typography>
              {  
                 allTodo.map((value,id)=>{

                    if(singleTodoIndex==id){

                         return <Todo setBorder={true} 
                                  key={id} title={value.title} 
                                  description={value.description} 
                                  author={value.author} 
                                  check={value.check} 
                                  index={id} 
                                  pos={value.pos}/>
                         
                    }
                     else{
                        return <Todo setBorder={false} 
                                 key={id} 
                                 title={value.title} 
                                 description={value.description} 
                                 author={value.author} 
                                 check={value.check} 
                                 index={id} 
                                 pos={value.pos}/>
                      }
                 })
              }

              { 

                  allTodo.length===0 ? <AddTodo/> : ""
              }
         </Box>

      </>
    );
}

export default TodoList;