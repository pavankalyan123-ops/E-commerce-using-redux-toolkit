import React from 'react';
import {Input,Button,Menu,Layout,Badge} from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux';

const{Header}=Layout;
const{Search}=Input;

const Navbar = () => {
  const cartDetails=useSelector(state=>state.cart.cartDetails);
  const totalPrice=useSelector(state=>state.cart.totalPrice);
  return (
    <>
       <Header style={{ background: '#001529', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div className="logo" style={{ fontSize: '24px', color: '#fff' }}>E-mart</div>
      <Menu theme="dark" mode="horizontal" style={{ flex: '1', justifyContent: 'space-between' }}>
        <Menu.Item key="1" style={{ marginRight: '20px' }}>
          <Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2" style={{ marginRight: '20px' }}>
          <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
        </Menu.Item>
      </Menu>
      <Menu theme="dark" mode="horizontal" style={{ flex: '1', justifyContent: 'space-between' }}>
        <Menu.Item key="3" style={{ marginRight: '20px' }}>
          <Button type="primary">Sign In</Button>&nbsp;
          <Button type='primary'>Sign Out</Button>
        </Menu.Item>
        <Menu.Item key="4" style={{ marginRight: '20px' }}>
          <Badge count={cartDetails.length}>
            <ShoppingCartOutlined style={{ fontSize: '20px' }} />
          </Badge>
          <span style={{ marginLeft: '8px' }}>Cart Items</span>
          <span style={{ marginLeft: '8px' }}>{totalPrice}/-</span>
        </Menu.Item>
      </Menu>
    </Header>

    <Menu  mode="horizontal" >
  <Menu.Item key="5" style={{ marginRight: '20px' }}>
    <Link to="/mobiles">Mobiles</Link></Menu.Item>
  <Menu.Item key="6" style={{ marginRight: '20px' }}>
    <Link to="/computers">Computers</Link></Menu.Item>
  <Menu.Item key="7" style={{ marginRight: '20px' }}>Watches</Menu.Item>
  <Menu.Item key="8" style={{ marginRight: '20px' }}>TVs</Menu.Item>
  <Menu.Item key="9" style={{ marginRight: '20px' }}>ACs</Menu.Item>
  <Menu.Item key="10" style={{ marginRight: '20px' }}>Books</Menu.Item>
  <Menu.Item key="11" style={{ marginRight: '20px' }}>Kitchen</Menu.Item>
  <Menu.Item key="12" style={{ marginRight: '20px' }}>Men</Menu.Item>
</Menu>

    </>
  )
}

export default Navbar