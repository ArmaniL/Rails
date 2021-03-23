import logo from './logo.svg';
import './App.css';
import Map from './map.js'
import { AppBar,Toolbar,Typography,Button } from '@material-ui/core';
import { Component,useEffect,useState } from 'react';

const styles = {
  root: {
    flexGrow: 1
  },
  typography: {
flexGrow: 1,
    align: "center"
  }
};


function App (){



  const [coins,setCoins]=useState(0)
  const [city,setCity] = useState("")
  const [err,setErr] = useState(null)
  const [username,setUsername] = useState("Chris McNabb")
  const [balance,setBalance ] = useState(20)
  const [reduction,setReduction] = useState("20.45")
  const [mileage,setMileage] = useState("40 miles")
  const [pressed,setPressed]= useState({})
  
  




  useEffect(()=>{
    
    const key
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    
    
    navigator.geolocation.getCurrentPosition(
      (pos)=>{
          const crd=pos.coords
          const mapsurl="https://maps.googleapis.com/maps/api/geocode/json?key="+key+"&latlng="+crd.latitude.toString()+","+crd.longitude.toString()
          console.log(mapsurl)
          fetch(mapsurl).then((response)=> response.json()).then((data)=>{
             const localcity=data.results[2].address_components[1]["long_name"]
             setCity(localcity)
             console.log(localcity)
             
          })
        }
      
      , (err)=>{  
          //If there is a problem with the geolocaction just use a random city
          
        setErr(err)
        
    }, options);


  })

console.log(pressed)
 
  return (
    <div className="App">
    <div className="Navbar">  
     <span style={{color:"white",fontFamily:"Roboto, Helvetica, Arial, sans-serif",fontWeight:400,letterSpacing:"0.00735em",fontSize:"2.125rem"}}>
      Rails
    </span>
</div>
<Map address={city} username={username} balance={balance} reduction={reduction} mileage={mileage} pressed={setPressed} ></Map>
  
      </div>
  );


}
export default App;


