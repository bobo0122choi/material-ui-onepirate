import * as React from 'react';
import AppForm from './modules/views/AppForm';
import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from "./modules/views/AppFooter";
import Typography from './modules/components/Typography';
import YoutubeEmbed from "./modules/components/YoutubeEmbed";



export default function Singer() {


  return (
    <>
   
    <AppAppBar />
    <div style={{marginTop: "-40px", marginBottom: "80px"}}>
    <AppForm sm={{ width: 1200, height: 900 }} align="center" >
    <br/><br/><br/><br/>

    <Typography variant="h2" gutterBottom marked="center" align="center">
   Classical, Pop, Art Songs
    </Typography>
    <YoutubeEmbed embedId="lv0eiJ6mnPY" />
    <YoutubeEmbed embedId="p5GbVW7SDF4" />
    <YoutubeEmbed embedId="LGNkPw5JL7g" />
<br/><br/><br/><br/>

 <Typography variant="h2" gutterBottom marked="center" align="center">
  My Favorite Songs
    </Typography>
    <YoutubeEmbed embedId="H5v3kku4y6Q" />
    <YoutubeEmbed embedId="5r3B7yz6J68" />
    
      </AppForm>
   < AppFooter/>

   </div>
</>
  );
}

