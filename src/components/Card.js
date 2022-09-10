import React from 'react';
import styled from 'styled-components';

export default function Card(props) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
  }
  const cardElements = props.data.map((item, index) => {
    return (
      <CardContent key={index} onClick={() => props.handleClick(item)}>
        <img src={item.flags.png} alt='country' />
        <div className='info'>
          <h3>{item.name.common}</h3>
          <h4>
            Population: <span>{numberWithCommas(item.population)}</span>
          </h4>
          <h4>
            Region: <span>{item.region}</span>
          </h4>
          <h4>
            Capital: <span>{item.capital}</span>
          </h4>
        </div>
      </CardContent>
    );
  });

  return cardElements;
}

const CardContent = styled.div`
  width: 280px;
  height: 330px;
  background: var(--color-background-dark);
  color: hsl(0, 0%, 100%);
  grid-column: span 1;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 1px 1px 10px 0px black;
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  .info {
    padding: 1rem;
    h3 {
      margin-bottom: 0.8rem;
    }
    h4 {
      font-size: 0.9rem;
      font-weight: bold;
      margin-bottom: 0.4rem;
      span {
        color: hsl(0, 0%, 98%);
        font-weight: normal;
      }
    }
  }
`;
