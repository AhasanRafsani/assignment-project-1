import React from "react";
import Layout from "../components/Layout";
import ContentBody from "../components/ContentBody";
import TodoList from "../components/TodoList";
import EditTodo from "../components/EditTodo";
import {useSelector} from "react-redux";
import {Grid} from "@mui/material";
const TodoPage = ()=>{

    const TotoList = useSelector((state)=>state.todoReducer.todo);
    const showEditBox = useSelector((state)=>state.todoReducer.showEditBox);
   
    return(
         
        <Layout>
           <ContentBody>


               <Grid container>
                   <Grid item xs={8}>
                        <TodoList/>    
                   </Grid>

                   <Grid item xs={4}>
                      {
                       ( TotoList.length !== 0 && showEditBox ) ? <EditTodo/> : ""
                      } 
                   </Grid>
               </Grid>
               
           </ContentBody>
        </Layout>
         
    );
}

export default TodoPage;