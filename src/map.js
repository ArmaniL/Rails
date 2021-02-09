import account from './account.svg';
import crypto from './bitcoin.svg';
import './App.css';
import { AppBar,Toolbar,Typography,Button, Card, CardContent } from '@material-ui/core';
import { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Iframe from 'react-iframe';
import dummy_data from './MOCK_DATA'
import LogoScroll from './redeem';
import React from 'react';
import Popup from 'reactjs-popup';
import scooter from './electric-scooter.svg'
import car from './car-steering-wheel.svg'


function Dashboard(props){


return(
    <div style={{backgroundColor:"rgb(186, 183, 196)",marginTop:"0px",marginBottom:"0px",paddingTop:"20px",paddingBottom:"20px",borderRadius:"10px"}}>
    <Grid container spacing={10}>
        <Grid item xs={6}>
        <div style={{display:"flex",flexDirection:"column"}}>    
        <img src={account} height={70}  style={{}} ></img>
        <span><b>{props.username}</b></span>
        </div>
        </Grid>
        <Grid item xs={6}>
       <div style={{display:'flex',flexDirection:'column'}}>     
       <div style={{display:'flex',flexDirection:'row'}} >
       <h4 style={{marginLeft:"40%",marginRight:"1%"}}>{"Balance: "+props.balance+ " R$" }</h4>
       </div>
       <span>{"Carbon Footprint Reduction: "+ props.reduction+" tons"}</span>
       <span>{" Mileage: "+ props.mileage }</span>
       </div>
        </Grid>
        <Grid item xs={12}>
            <div style={{display:'flex',flexDirection:'column',marginLeft:"30%"}}>
            <LogoScroll/>
            </div>
        </Grid>
        
    </Grid>
    </div>
);

}

function Places(props){

return(
    <Popup
    trigger={<div style={{cursor:"pointer"}} >
    <Card>
        <CardContent>
           <Typography variant="h5">
               {props.address}
               </Typography> 
               <Typography variant="h6">
               {props.rails_hub}
               </Typography> 
               <Typography variant="span">
               {props.distance+  (props.distance>1?" miles":" mile")+ " away"}
               </Typography> 
        </CardContent>
    </Card>
    </div>}
    position="top left"
    on="click"
    closeOnDocumentClick
    mouseLeaveDelay={300}
    mouseEnterDelay={0}
    contentStyle={{ padding: '0px', border: 'none' }}
    arrow={false}
  >

      
<div style={{display:'flex',flexDirection:'column',width: "200px",height:"200px",
  background: "rgb(113, 81, 196)",padding:"30px",borderRadius:"25px"}}>
<div style={{display:'flex',flexDirection:'column'}}>
Scooters
<div style={{display:'flex',flexDirection:'row'}}>
    
    <img src={scooter} width={25}  height={25}></img>
    <span>{props.scooters_availible}</span>
    </div>
    0.3R$ per meter driven
<hr></hr>
    Electric Vehicles
    <div style={{display:'flex',flexDirection:'row'}}>
 <img src={car} width={20}  height={20} ></img>
 <span>{props.electric_cars}</span>
 </div>
1R$ per meter driven
 </div>

</div>
    </Popup>
)

}


export default class map extends Component{


componentDidMount(){


}

    render(){
        
const address = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDWTSO8vGyBu3kIOWDFK3iV8ZmTUraqWdI&q="+this.props.address;
const rails=  dummy_data.map((item)=>{return(<Places address={item.address} rails_hub={item.rails_hub}  distance={item.distance} scooters_availible={item.scooters_availible}   electric_cars={item.electric_cars}  />)});
        return(
<Grid container spacing={3}>
<Grid item xs={6}>
<div style={{borderRight:"20px",borderRightWidth:"5"}} >     
<Iframe src={address}
        width="600px"
        height="600px"
        styles={{border:0}}
        className="myClassname"
        display="initial"
        position="relative"/>
        </div>
</Grid>
<Grid item xs={6}>
 <Dashboard username={this.props.username} balance={this.props.balance} reduction={this.props.reduction}  mileage={this.props.mileage} />   
 <div style={{backgroundColor:"rgb(113, 81, 196)",borderRadius:"4px"}} >   
<h4 style={{fontStyle:"Segoe UI",color:"rgb(255,254,254)"}}>
    Availible Rails
</h4>
<div style={{height:"600px",overflow:"scroll",overflowx:"hidden"}} >
   {rails} 
</div>
</div>
</Grid>


</Grid>       
        )
    }
}