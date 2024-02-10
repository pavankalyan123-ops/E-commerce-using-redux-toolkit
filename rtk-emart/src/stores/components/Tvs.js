import React from 'react';
import { tvData } from '../data/tv';

const Tvs = () => {
    const firstFiveImages=tvData.slice(0,5)
  return (
    <>
     <h2>Watches</h2>
      <div style={{display:"flex"}}>
        {firstFiveImages.map(Tv=>(
          <div style={{width:"80%"}}>
            <img src={Tv.image} alt="" style={{width:"80%"}} />
            
          </div>
        ))}
        </div>
    </>
  )
}

export default Tvs