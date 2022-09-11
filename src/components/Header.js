import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import styled from 'styled-components';
import { ThemeContext } from '../App';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  function changeTheme() {
    theme.toggleTheme();
  }
  return (
    <>
      <HeaderBar className='header'>
        <h2 onClick={() => navigate('/countries-api')}>Where in the world?</h2>
        {theme.theme === 'light' ? (
          <button onClick={changeTheme}>
            <FaMoon />
            Dark Mode
          </button>
        ) : (
          <button onClick={changeTheme}>
            <FaSun />
            Light Mode
          </button>
        )}
      </HeaderBar>
    </>
  );
}

const HeaderBar = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  background: var(--color-background-dark);
  box-shadow: 2px 2px 2px black;
  h2 {
    color: hsl(0, 0%, 100%);
    font-weight: 800;
    cursor: pointer;
  }
  button {
    color: hsl(0, 0%, 100%);
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
    font-weight: 600;
    border: 0;
    cursor: pointer;
  }
`;
