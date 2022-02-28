import React from "react";
import Layout from "../components/Layout";
import {Grid,Avatar,Typography,Box} from "@mui/material";
import ContentBody from "../components/ContentBody";
import img from "../assets/images/rafsani.jpg";




const HomePage = ()=>{
   
    return(
            <Layout>
                 <ContentBody>
                   <Grid container>
                      <Grid item container xs={12} md={5}> 
                            <Grid item xs={12} sm={3} >
                                   <Box>
                                     <Avatar src={img} alt="Rafsani" sx={{ width:80, height: 80, margin:"5px" }} />
                                   </Box>  
                            </Grid>
                             <Grid item xs={12} sm={9}>
                                 <Box sx={{margin:"5px"}}>
                                   <Typography variant="h6">Ahasan Rafsani</Typography>
                                   <Typography variant="subtitle2">Web Applicarion Developer</Typography>
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <Box sx={{margin:"5px"}}>
                              <Typography variant="h5">About Myself</Typography>
                              <Typography variant="subtitle2">I am web application developer who is proﬁcient in both front-end and back-end development.
                               Fluent in JavaScript programming languages used to develop software that meets business need. 
                               My passion lies in learning about the latest technologies.</Typography>
                            </Box> 
                        </Grid>
                      
                    </Grid>
                 </ContentBody>
             </Layout>
          );
}

export default HomePage;