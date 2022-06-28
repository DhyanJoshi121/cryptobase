import { Col, Row, Statistic, Typography } from 'antd';
import axios from 'axios';
import React from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify';
import { Link } from 'react-router-dom';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalState = data?.data?.stats;
  if (isFetching) return 'Loading...';

  return (
    <>
      <Typography.Title level={2} className="heading">
        Global Crypto State
      </Typography.Title>
      <Row>
        <Col span={8}>
          <Statistic title="Total Cryptocurrencies" value={globalState.total} />
        </Col>
        <Col span={8}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalState.totalExchanges)}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalState.totalMarketCap)}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalState.total24hVolume)}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Total Markets"
            value={millify(globalState.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Typography.Title level={3} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Typography.Title>
        <Typography.Title
          level={4}
          className="show-more"
          style={{ marginTop: '0' }}
        >
          <Link to="/cryptocurrencies">Show more</Link>
        </Typography.Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Typography.Title level={3} className="home-title">
          Latest Crypto News
        </Typography.Title>
        <Typography.Title
          level={4}
          className="show-more"
          style={{ marginTop: '0' }}
        >
          <Link to="/news">Show more</Link>
        </Typography.Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
