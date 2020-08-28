import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 80%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Main = styled.div`
  background: var(--color-content);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 300px;
  border-radius: 8px;

  label {
    font-size: 24px;
  }

  span {
    font-size: 18px;
  }
`;

export const Temperature = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 200px;
  height: 60px;
  margin-bottom: 20px;

`;

export const Status = styled.div`
  background: ${props => {
    if(props.status === 'Arriscado') {
      return 'red';
    } else if (props.status === 'Alerta') {
      return 'yellow';
    } else if (props.status === 'OK') {
      return 'green';
    } else {
      return '';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 200px;
  height: 80px;
  margin-bottom: 20px;
  border-radius: 8px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--color-button);
    border-radius: 8px;

  span {
    display: block;
    color: red;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  strong {
    padding: 10px;
    text-align: center;
    color: orange;
  }

  nav a:hover {
    background: ${darken(0.2, '#fff')};
  }
`;