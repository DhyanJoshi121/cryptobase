import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from '@ant-design/icons';
import { Avatar, Layout, Menu, Typography } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../images/logo.png';

const Navbar = () => {
  return (
    <div className="Navbar-container">
      <div className="logo-container">
        <Avatar
          src={icon}
          size={{
            xs: 24,
            sm: 32,
            md: 40,
            lg: 64,
            xl: 80,
            xxl: 100,
          }}
          style={
            {
              // marginBottom: '1rem',
              // paddingBottom: '1rem',
            }
          }
          className="logoimg"
        />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptobase</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark" style={{ height: '100vh' }}>
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/Exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
