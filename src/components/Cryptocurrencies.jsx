import { Card, Col, Input, Row } from 'antd';
import millify from 'millify';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptoList, searchTerm]);
  if (isFetching) return 'Loading...';
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((c) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={c.id}>
            <Link to={`/crypto/${c.id}`}>
              <Card
                title={`${c.rank}. ${c.name} `}
                extra={<img className="crypto-image" src={c.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(c.price)}</p>
                <p>Market Cap: {millify(c.marketCap)}</p>
                <p>Daily Change: {millify(c.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
