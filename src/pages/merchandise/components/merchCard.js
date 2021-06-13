import React from 'react';
import Card from 'react-bootstrap/Card';

import {
  white,
  black,
  lightGray,
  lightBlue
} from '../../../constants/colors';
import { StyledCard } from '../../../components/styled-components';

export default class MerchCard extends React.Component {
  render() {
    const { name, price, thumbnail, sizes } = this.props.merch;
    return (
      <StyledCard
        restcolors={{ bgColor: white, color: black }}
        hovercolors={{ bgColor: lightGray, color: black }}
        style={{
          width: '12em'
        }}
        onClick={this.props.onClick}
      >
        <Card.Img src={thumbnail} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{price === 0 ? 'FREE!' : `$${price.toFixed(2)}`}</Card.Subtitle>
          {(sizes && sizes.length > 0) && 
            <Card.Text style={{ color: lightBlue }}>
              {sizes.length} sizes available
            </Card.Text>
          }
        </Card.Body>
      </StyledCard>
    )
  }
}