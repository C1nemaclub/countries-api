import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import styled from 'styled-components';

function App() {
  const [contriesData, setCountriesData] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await axios.get('https://restcountries.com/v3.1/all');
      setCountriesData(data.data.slice(0, 20));
    }
    getData();
  }, []);

  return (
    <div className='App'>
      <CardContainer>
        <Card data={contriesData} />
      </CardContainer>
    </div>
  );
}

export default App;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  place-items: center;
  gap: 3rem;
`;
