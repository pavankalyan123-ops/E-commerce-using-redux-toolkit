import React from 'react';
import { computerData } from '../data/computers';

const Computers = () => {
    const firstFiveImages=computerData.slice(0,5)
  return (
    <>
      <h2>Computers</h2>
      <div style={{display:"flex"}}>
        {firstFiveImages.map(computer=>(
          <div style={{width:"80%"}}>
            <img src={computer.image} alt="" style={{width:"80%"}} />
            
          </div>
        ))}
        </div>
    </>
  )
}

export default Computers