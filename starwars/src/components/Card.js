import React from 'react';

import styled from "styled-components";

const CharCard = styled.div`
  width: 50%;
  margin: 30px auto;
  padding: 10px;
  border-radius: 20px;
  background: #f3f3f3;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 
  0 6px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Card(props) {
  return (
    <>
      <CharCard>
        <h2>{props.name}</h2>
        <p>Birth Year: {props.birthyear}</p>
        <p>Height: {props.height}</p>
        <p>Mass: {props.mass}</p>
      </CharCard>
    </>
  );
}

export default Card;