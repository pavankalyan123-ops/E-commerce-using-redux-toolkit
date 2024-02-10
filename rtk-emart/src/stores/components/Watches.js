import React from 'react';
import { watchData } from '../data/watch';

const Watches = () => {
    const firstFiveImages=watchData.slice(0,5)
  return (
    <>
      <h2>Watches</h2>
      <div style={{display:"flex"}}>
        {firstFiveImages.map(watch=>(
          <div style={{width:"80%"}}>
            <img src={watch.image} alt="" style={{width:"80%"}} />
            
          </div>
        ))}
        </div>
    </>
  )
}

export default Watches