import chicfila from './chicfila.png';
import starbucks from './starbucks.png';
import DD from './DD.png';
import Direct from './directdeposity.png';
import bitcoin from './bitcoin.svg';
const promos=[
    
    {src:Direct,text:'Direct Deposit'},
    {src:bitcoin,text:'Bitcoin Transfer'},
    {src:chicfila,text:'ChicFilA'},
    {src:DD,text:'Dunkin Donuts'},
    {src: starbucks,text:'Starbucks '},
    

]


function Redeem(props){
return(
<div style={{display:"flex",flexDirection:"column",marginRight:"30px",width:"50px"}} >

<img src={props.src} style={{borderRadius:"50%",margin:"5px"}} height={50} width={50} ></img>
<span>{props.text}</span>
</div>
)
}

function LogoScroll(props){

const lg= promos.map(item=>{  return(<Redeem src={item.src} text={item.text} ></Redeem>)        })

return (

    <div style={{display:"flex",flexDirection:"row"}}>{lg}</div>
)

}

export default LogoScroll;