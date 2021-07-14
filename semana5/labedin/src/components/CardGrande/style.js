import styled from 'styled-components';

export const BigCardContainer = styled.section`
  align-items: center;
  border: 1px solid black;
  display: flex;
  height: 200px;
  margin-bottom: 10px;
  padding: 20px 10px;

  img {
    border-radius: 50%;
    margin-right: 10px;
    width: 70px;
  }

  h4 {
    margin-bottom: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
  }
`;
