import React from 'react';
import { FaSistrix, FaMoon } from 'react-icons/fa';
import styled from 'styled-components';

export default function Header() {
  return (
    <>
      <HeaderBar>
        <h2>Where in the world?</h2>
        <button>
          <FaMoon />
          Dark Mode
        </button>
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
