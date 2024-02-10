import React from 'react';
import Navbar from '../components/Navbar';
import { useSelector,useDispatch } from 'react-redux';
import { Button } from 'antd';
import { deleteFromCart } from '../redux/CartReducer';

const ViewAllProductsPage = () => {
    const cartDetails=useSelector(state=>state.cart.cartDetails);
    const dispatch=useDispatch();
  return (
    <>
    <Navbar/>
    <h2>Your cart Details:</h2>
    <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
        {cartDetails.map(mobile=>(
          <div style={{width:"30%"}}>
            
            <img src={mobile.image} alt="" style={{width:"80%",cursor:"pointer"}} />
            
            <h3>{mobile.company}{mobile.model}|{mobile.price}</h3>
            <Button type='primary' onClick={()=>{
                dispatch(deleteFromCart(mobile))
            }}
             danger>Remove</Button>
          </div>
        ))}
        </div>
    </>
  )
}

export default ViewAllProductsPage