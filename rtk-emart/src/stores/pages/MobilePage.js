import React from 'react';
import { mobileData } from '../data/mobiles';
import { Button } from 'antd';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const MobilePage = () => {
  return (
    <>
    <Navbar/>
      <h2>Mobiles</h2>
        <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
        {mobileData.map(mobile=>(
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
    </>
  )
}

export default MobilePage