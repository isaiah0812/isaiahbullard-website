import React from 'react';
import styled from 'styled-components';
import { Card, CardImg } from 'react-bootstrap';

const BeatCard = styled(Card)`
  width: 10em;
  background-color: #040B30;
  margin: 5px;
  cursor: pointer;
  color: #FFFFFF;
  transition: background-color 0.2s, color 0.2s, top 0.2s, box-shadow 0.2s;

  &:hover {
    background-color: #29B3F1;
    color: #000000;
    top: -4px;
    box-shadow: 0px 10px 10px;
  }
`

export default ({ name, cover, onClick }) => {
  return (
    <BeatCard onClick={onClick}>
      <CardImg src={cover} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Click to Remove</Card.Text>
      </Card.Body>
    </BeatCard>
  );
}