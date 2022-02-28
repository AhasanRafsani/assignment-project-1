
import { createSlice } from '@reduxjs/toolkit';

  
  export const todoSlice = createSlice({
      name:"todo",
      initialState:{
          todo: [],
          singleTodo:{

          },
          singleTodoIndex:"",
          showEditBox:true  
      },
      reducers:{
        addTodo:(state,action) =>{
            const position = action.payload;
            const addNewTodo = {
                                    title:"New Task Title 2",
                                    description:"Task Description 5",
                                    author:"Rafsani",
                                    check:false,
                                    pos:position,
                              }
                                
    
            if(position===0){
                   state.todo.splice(position,0,addNewTodo);
                   state.singleTodoIndex=position;
                  
            }
            else{
            state.todo.splice(position,0,addNewTodo );
            state.singleTodoIndex=position;
            
            }
        },
        getTodo:(state,action)=>{
          let id = action.payload;
             const findSingleTodo = state.todo.find((val,index)=>index===id);
              state.singleTodo = {...findSingleTodo,pos:id} ;
              
             
        },
        updateTodo:(state,action)=>{
          
            const {title,description,author,pos,check} = action.payload;
          
            let  updateToto = {
                        title,
                        description,
                        author,
                        check,
                        pos  }

            state.todo =  state.todo.map((val,index)=> index===pos ? updateToto : val);
              
        },

        deleteTodo:(state,action)=>{
          
          state.todo = state.todo.filter((val,index)=>index !== action.payload)
        },

        showEditBoxTodo:(state,action)=>{
           state.showEditBox=action.payload
        }
            
              
        
      }
        
    });

    export const { addTodo , getTodo , updateTodo ,deleteTodo,showEditBoxTodo } = todoSlice.actions;

    