import React from 'react'
import Navbar from '../components/Navbar';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { computerData } from '../data/computers';

const ComputerSinglePage = () => {
    const{id}=useParams();
    const singleProduct=computerData.find(obj=>obj.id===id);
  return (
    <>
    <Navbar/>
      <div>
        <img src={singleProduct.image} alt="" />
        <h3>{singleProduct.company}{singleProduct.model}|{singleProduct.price}</h3>
        <Button type='primary'>Add</Button>
        <Button type='primary' danger>Remove</Button>
      </div>
     <br/><br/>
     <Link to="/computers">
      <Button type='primary' danger>Go back</Button>
      </Link>
    </>
  )
}

export default ComputerSinglePage