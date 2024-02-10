import React from 'react';
import Navbar from '../components/Navbar';
import { computerData } from '../data/computers';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const ComputerPage = () => {
  return (
    <>
     <Navbar/>
     <h2>Computers</h2>
      <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
        {computerData.map(computer=>(
          <div style={{width:"30%"}}>
            <Link to={`/computers/${computer.id}`}>
            <img src={computer.image} alt="" style={{width:"80%"}} />
            </Link>
            <h3>{computer.company}{computer.model}|{computer.price}</h3>
            <Button type='primary'>Add</Button> &nbsp;
            <Button type='primary' danger>Remove</Button>
          </div>
        ))}
        </div>
    </>
  )
}

export default ComputerPage