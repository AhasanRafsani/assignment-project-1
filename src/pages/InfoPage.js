import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ContentBody from "../components/ContentBody";
import axios from "axios"
import {Grid ,Box,Typography} from "@mui/material";
import User from "../components/User";
import Album from "../components/Album";
import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
   root:{
     boxSizing:"border-box",
   }
})

const InfoPage = ()=>{

    const [users,setUsers] = useState([]);
    const [albums,setAlbums] = useState([]);

    const getUsers = async()=>{
        try{
           const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
           console.log(data);
           setUsers(data);
        }catch(err){
            console.log(err);
            
        }
    }
    const getAlbums = async()=>{
        try{
           const {data} = await axios.get("https://jsonplaceholder.typicode.com/albums");
           console.log(data);
           setAlbums(data);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getUsers();
        getAlbums();  
    },[])

     const classes = useStyle(); 
    return(
       
        <Layout>
            <ContentBody>
                <Box className={classes.root}>
                    <Grid container justifyContent="center" >
                        <Grid item xs={12} md={6}>
                            <Typography sx={{margin:"10px 0px 5px 20px"}} variant="h6">User List</Typography>
                            {
                              users.map((value,index)=>(
                                  <User key={index} name={value.name} email={value.email} phone={value.phone} address={value.address.city} />
                              ))
                            } 
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography sx={{margin:"10px 0px 5px 20px"}}  variant="h6">Album List</Typography>
                           {
                               albums.map((value,index)=>(
                                   <Album key={index} title={value.title} />
                               ))
                           }
                        </Grid>
                    </Grid>
                </Box>
            </ContentBody>
        </Layout>
      
    );
}

export default InfoPage;