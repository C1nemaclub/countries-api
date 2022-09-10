import React from 'react';
import styled from 'styled-components';

export default function Card(props) {
  console.log(props.data);

  const cardElement = props.data.map((item, index) => {
    return (
      <CardContent key={index}>
        <img src={item.flags.png} alt='country' />
        <div className='info'>
          <h3>{item.name.common}</h3>
          <h4>
            Population: <span>{item.population}</span>
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

  return cardElement;
}

const CardContent = styled.div`
  width: 250px;
  height: 325px;
  background: hsl(209, 23%, 22%);
  color: hsl(0, 0%, 100%);
  grid-column: span 1;
  img {
    width: 100%;
    height: 150px;
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
