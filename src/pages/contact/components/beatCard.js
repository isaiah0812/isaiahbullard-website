import React from 'react';
import Card from 'react-bootstrap/Card';

import { 
  white, 
  black, 
  lightBlue, 
  darkBlue 
} from '../../../constants/colors';
import { StyledCard } from '../../../components/styled-components';

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
      <StyledCard 
        onClick={onClick}
        restcolors={{ bgColor: darkBlue, color: white }}
        hovercolors={{ bgColor: lightBlue, color: black }}
      >
        <Card.Img src={cover} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Click to Remove</Card.Text>
        </Card.Body>
      </StyledCard>
    );
  }
}