import React from 'react';
import Navbar from '../components/Navbar';
import { mobileData } from '../data/mobiles';
import { useParams } from 'react-router-dom';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTocart,deleteFromCart} from '../redux/CartReducer';

const MobileSinglePage = () => {
    const dispatch=useDispatch();
    const{id}=useParams();
    const singleProduct=mobileData.find(obj=>obj.id===id);
    
  return (
    <>
      <Navbar/>
      <div>
        <img src={singleProduct.image} alt="" />
        <h3>{singleProduct.company}{singleProduct.model}|{singleProduct.price}</h3>
        <Button type='primary' onClick={()=>{
            dispatch(addTocart(singleProduct))
        }}>Add</Button>
        <Button type='primary' onClick={()=>{
            dispatch(deleteFromCart(singleProduct))
        }}
         danger>Remove</Button>
      </div>
     <br/><br/>
     <Link to="/mobiles">
      <Button type='primary' danger>Go back</Button>
      </Link>
    </>
  )
}

export default MobileSinglePage