import React, { useState } from "react";
import Layout from "../components/Layout";
import ContentBody from "../components/ContentBody";
import {Typography,TextField,FormControl,Box,FormControlLabel,FormGroup,FormLabel, Checkbox,Radio, Button,RadioGroup} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useInput } from "@mui/base";
import {formValidation} from "../userInputValidatio/formValidation"

const useStyle = makeStyles({
  root:{
    minHeight:"300px",
    width:"60%",
    margin:"20px auto"
    
  },
  inputField:{
    marginTop:"20px"
  }
});

const userSkills = ["css","javascript","react","figma"];

const initInput = {
  email:"",
  name:"",
  skills:[],
  gender:""};

const FormPage = ()=>{
  const [userInput , setUserInput] = useState(initInput);

  const [errors,setErrors] = useState(initInput);

  const handleInputChange =(e)=>{

            setUserInput({...userInput,[e.target.name]:e.target.value}) ;
     
  }

   const  handleCheckBoxChange =(value,checked)=>{
               if(checked){
                      setUserInput({...userInput,skills:[...userInput.skills,value]}); 
               }
               else{
                   let _option = userInput.skills.filter((item)=> item !== value);
                   setUserInput({...userInput,skills:_option}); 

               }
   }
  const isChecked =(value)=>{
      
       if(userInput.skills.find((item)=> item === value)){
           return true;
       }
       else
       { 
         return false;
       }
  }


  const handleFormSubmit = (e)=>{
     e.preventDefault();
    const result = formValidation(userInput);
           setErrors(result);
      console.log(userInput);
     
  }
  const classes = useStyle();
    return(
         
             <Layout>
                 <ContentBody>
                     <Box className={classes.root}>
                       <form onSubmit={handleFormSubmit}>
                         <TextField fullWidth 
                          variant="outlined" 
                          label="Email address" 
                          type="email" 
                          sx={{marginTop:"20px"}}
                          name="email"
                          error={errors.email}
                          value={userInput.email}
                          onChange={handleInputChange}/>
                          <Typography color="red" variant="subtitle2">{errors.email}</Typography>

                         <TextField 
                          fullWidth 
                          variant="outlined" 
                          label="Name" 
                          type="text" 
                          sx={{marginTop:"20px"}} 
                          name="name"
                          error={errors.name}
                          value={userInput.name}
                          onChange={handleInputChange}/>
                          <Typography color="red" variant="subtitle2">{errors.name}</Typography>
                          

                      <FormControl sx={{marginTop:"20px"}} fullWidth>
                         <FormLabel>Skills</FormLabel>
                             <FormGroup row>
                               {userSkills.map((value,index)=>(
                                <FormControlLabel key={index} label={value} control={<Checkbox checked={isChecked(value)} onChange={(e)=>handleCheckBoxChange(value,e.target.checked)}/>}/>
                               ))} 
                              </FormGroup>
                              <Typography color="red" variant="subtitle2">{errors.skills}</Typography>     
                      </FormControl>

                      <FormControl sx={{marginTop:"20px"}} fullWidth>
                            <FormLabel>gender</FormLabel>
                               <RadioGroup row name="gender" value={useInput.gender} onChange={handleInputChange}>
                                   <FormControlLabel label="Male" value="male" control={<Radio/>}/>
                                   <FormControlLabel label="Female" value="female" control={<Radio/>}/>
                                   <FormControlLabel label="Other" value="other" control={<Radio/>}/>
                               </RadioGroup>
                               <Typography color="red" variant="subtitle2">{errors.gender}</Typography>
                      </FormControl>

                      <Button type="submit" variant="contained" sx={{margin:"20px 0px 20px 0px"}} >submit</Button>  
                       </form>
                     </Box>
                 </ContentBody>
             </Layout>
     
        
    );
}

export default FormPage;