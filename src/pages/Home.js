import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import styled from 'styled-components';
import { FaSistrix } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [contriesData, setCountriesData] = useState([]);
  const [searchInput, setSearchInput] = useState({
    country: '',
    region: '',
  });

  useEffect(() => {
    async function getData() {
      const data = await axios.get('https://restcountries.com/v3.1/all');

      const filteredData = data.data.filter((country) => {
        if (searchInput.region === '' || searchInput.region === 'All') {
          return country;
        } else {
          return country.region === searchInput.region;
        }
      });
      setCountriesData(filteredData);
    }
    getData();
  }, [searchInput.region]);

  function viewCountry(country) {
    navigate(`/country/${country.name.common}`, {
      state: { country: country },
    });
  }

  function onChange(e) {
    const { name, value } = e.target;
    setSearchInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function onSearch(e) {
    e.preventDefault();
  }
  return (
    <Page className='home-page page'>
      <div className='page-content'>
        <div className='form-container'>
          <form onSubmit={(e) => onSearch(e)}>
            <div className='search-bar'>
              <div className='input-group'>
                <button>
                  <FaSistrix className='icon' />
                </button>
              </div>
              <div className='input-group text-group'>
                <input
                  type='text'
                  name='country'
                  placeholder='Search for a country...'
                  value={searchInput.country}
                  onChange={(e) => onChange(e)}
                  autoComplete='off'
                />
              </div>
            </div>
            <div className='input-group region-group'>
              <select
                name='region'
                id=''
                value={searchInput.region}
                onChange={(e) => onChange(e)}
              >
                <option value='All'>Filter by Region</option>
                <option value='Africa'>Africa</option>
                <option value='Americas'>Americas</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
              </select>
            </div>
          </form>
        </div>
        <CardContainer>
          <Card
            data={contriesData}
            handleClick={viewCountry}
            search={searchInput}
          />
        </CardContainer>
      </div>
    </Page>
  );
}

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  place-items: center;
  gap: 3rem;
`;

const Page = styled.div`
  .page-content {
    width: 90%;
    margin: auto;
  }

  .form-container {
    width: 100%;
    margin: 2rem 0rem;
    form {
      display: flex;
      justify-content: space-between;
      color: white;
      .search-bar {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: flex-start;
        width: 35%;
        background: var(--color-background-dark);
        padding: 1rem 1rem;
        position: relative;
        border-radius: 5px;
        box-shadow: 2px 2px 2px black;
      }
      .text-group {
        width: 100%;
        input {
          width: 100%;
        }
      }
      .input-group {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        color: white;
        input {
          position: relative;
          background: transparent;
          outline: none;
          color: white;
          border: 0px;
          font-size: 1.1rem;
        }
        input::placeholder {
          color: #fff;
        }
        button {
          background: transparent;
          border: 0;
          cursor: pointer;
        }
        .icon {
          font-size: 1.5rem;
          color: white;
        }
      }
      .region-group {
        background: var(--color-background-dark);
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 2px 2px 2px black;
        display: flex;
        text-align: left;
        select {
          border: 0px;
          background: none;
          color: #fff;
          font-size: 1.1rem;
          outline: none;
          option {
            color: #fff;
            background: var(--color-background-dark);
            text-align: left;
          }
        }
      }
    }
  }
`;
