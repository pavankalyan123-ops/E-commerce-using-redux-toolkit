import React from 'react';
import { mobileData } from '../data/mobiles';

const Mobiles = () => {
  const firstFiveImages=mobileData.slice(0,5);
  return (
    <>
     <h2>Mobiles</h2>
        <div style={{display:"flex"}}>
        {firstFiveImages.map(mobile=>(
          <div style={{width:"80%"}}>
            <img src={mobile.image} alt="" style={{width:"80%"}} />
            
          </div>
        ))}
        </div>
    </>
  )
}

export default Mobiles