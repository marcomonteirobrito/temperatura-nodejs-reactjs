import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: linear-gradient(150deg, #53f 15%, #05d5ff);
  height: 44px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav a {
    text-decoration: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 250px;
    margin-left: 10px;
  }

  nav a span {
    display: block;
    color: orange;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav a strong {
    padding: 10px;
    text-align: center;
    color: orange;
  }

  nav a:hover {
    background: ${darken(0.2, '#fff')};
  }
`;



  
