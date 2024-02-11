import React,{useState} from 'react';
import { mobileData } from '../data/mobiles';
import { Button,Checkbox } from 'antd';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const MobilePage = () => {
  const filtered=mobileData.filter((mobile,index)=>{
    let ind=mobileData.findIndex(mb=>mb.id===mobile.id);
    return ind===index;
  })
  const[selected,setSelected]=useState([]);
  const handleSelected=(company)=>{
      if(selected.includes(company))
      {
        setSelected(selected.filter(item=>item!==company));
      }else{
        setSelected([...selected,company])
      }
  }
  const data=selected.length>0?mobileData.filter(mobile=>selected.includes(mobile.company)):mobileData;
  return (
    <>
    <Navbar/>
      <h2>Mobiles</h2>
      
      <div style={{display:"flex",justifyContent:"space-between",gap:"50px"}}>
      <div>
         {filtered.map(f=>(
          <div>
            <Checkbox checked={selected.includes(f.company)} onChange={()=>handleSelected(f.company)} >{f.company}</Checkbox>
          </div>
         ))}
      </div>
        <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
        {data.map(mobile=>(
          <div style={{width:"30%"}}>
            <Link to={`/mobiles/${mobile.id}`}>
            <img src={mobile.image} alt="" style={{width:"80%",cursor:"pointer"}} />
            </Link>
            <h3>{mobile.company}{mobile.model}|{mobile.price}</h3>
            <Button type='primary'>Add</Button> &nbsp;
            <Button type='primary' danger>Remove</Button>
          </div>
        ))}
        </div>
        </div>
    </>
  )
}

export default MobilePage