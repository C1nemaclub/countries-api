import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Country() {
  const navigate = useNavigate();
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
  }

  const { state } = useLocation();
  const country = state.country;
  const languages = Object.values(country.languages);
  const currencies = Object.values(country.currencies).map((item) => {
    return item.name;
  });

  return (
    <Page>
      <div className='page-content page'>
        <button onClick={() => navigate(-1)} className='icon-button'>
          <FaArrowLeft className='icon' />
          Back
        </button>
        <div className='content'>
          <div className='left'>
            <img src={country.flags.svg} alt='country-flag' />
          </div>
          <div className='right'>
            <h1>{country.name.common}</h1>
            <div className='info'>
              <h4>
                Native Name: <span>{country.name.official}</span>
              </h4>
              <h4>
                Population: <span>{numberWithCommas(country.population)}</span>
              </h4>
              <h4>
                Region: <span>{country.region}</span>
              </h4>
              <h4>
                Sub Region: <span>{country.subregion}</span>
              </h4>
              <h4>
                Capital: <span>{country.capital}</span>
              </h4>
              <h4>
                Top Level Domain: <span>{country.tld}</span>
              </h4>
              <h4>
                Currencies:{' '}
                <span>
                  {currencies.map((item) => {
                    return item;
                  })}
                </span>
              </h4>
              <h4>
                Languages: <span>{languages.map((item) => `${item},`)}</span>
              </h4>
            </div>
            {country.borders && (
              <div className='borders'>
                <h4>Border Countries: </h4>
                {country.borders.map((item) => {
                  return <span> {item}</span>;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </Page>
  );
}

const Page = styled.div`
  .page-content {
    width: 90%;
    margin: auto;
    button {
      margin: 3rem 0rem;
      color: hsl(0, 0%, 100%);
      background: var(--color-background-dark);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: 1rem;
      font-weight: 600;
      border: 0;
      cursor: pointer;
      padding: 0.5rem 2rem;
      font-weight: normal;
      border-radius: 5px;
      box-shadow: 5px 5px 5px black;
    }
  }
  .content {
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    .left {
      img {
        width: 600px;
        height: 400px;
      }
    }
    .right {
      width: 600px;
      height: 400px;
      padding: 2rem;
      margin-left: 4rem;

      h1 {
        color: var(--color-text-dark);
        font-weight: 800;
      }
      .info {
        margin-top: 2rem;
        color: var(--color-text-dark);
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-height: 180px;
        flex-wrap: wrap;
        span {
          font-weight: normal;
        }
      }
    }
    .borders {
      margin-top: 3.5rem;
      display: flex;
      color: var(--color-text-dark);
      align-items: center;
      h4 {
      }
      span {
        background: var(--color-background-dark);
        padding: 0.2rem 1rem;
        border-radius: 5px;
        margin-left: 1rem;
      }
    }
  }
`;
