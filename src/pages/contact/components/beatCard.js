import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg';

import { 
  white, 
  black, 
  lightBlue, 
  darkBlue 
} from '../../../constants/colors';

/**
 * The surrounding Card for the BeatCard
 * @constant
 * @name StyledBeatCard
 * @type {import('styled-components').StyledComponent}
 * @example <StyledBeatCard>...</StyledBeatCard>
 */
const StyledBeatCard = styled(Card)`
  width: 10em;
  background-color: ${darkBlue};
  margin: 5px;
  cursor: pointer;
  color: ${white};
  transition: background-color 0.2s, color 0.2s, top 0.2s, box-shadow 0.2s;

  &:hover {
    background-color: ${lightBlue};
    color: ${black};
    top: -4px;
    box-shadow: 0px 10px 10px;
  }
`

/**
 * A card containing the cover art and title of a beat when selected in on the Contact page.
 * @name BeatCard
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <BeatCard name="name" cover="cover.jpg" onClick={this.onClick(c)} />
 */
export default class BeatCard extends React.Component {
  render() {
    const { name, cover, onClick } = this.props;
    return (
      <StyledBeatCard onClick={onClick}>
        <CardImg src={cover} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Click to Remove</Card.Text>
        </Card.Body>
      </StyledBeatCard>
    );
  }
}