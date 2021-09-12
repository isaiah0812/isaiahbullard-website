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
  getPrice = () => {
    if(this.props.merch.price !== undefined && this.props.merch.price !== null) {
      return `$${this.props.merch.price.toFixed(2)}`
    } else {
      let lowest = this.props.merch.sizes[0].price
      let highest = this.props.merch.sizes[0].price

      for(const size of this.props.merch.sizes) {
        if(size.price < lowest) {
          lowest = size.price
        } else if(size.price > highest) {
          highest = size.price
        }
      }

      if(lowest === highest) return `$${lowest.toFixed(2)}`

      return `$${lowest.toFixed(2)} - $${highest.toFixed(2)}`
    }
  }

  isSoldOut = (quantity, sizes) => {
    if(quantity || quantity === 0) {
      return quantity === 0
    } else {
      for(let size of sizes) {
        if(size.quantity > 0) {
          return false
        }
      }

      return true
    }
  }

  sizeCount = (sizes) => {
    let sizeCount = 0
    if(sizes) {
      for(let size of sizes) {
        if(size.quantity > 0) {
          sizeCount++
        }
      }
    }

    return sizeCount
  }

  render() {
    const { name, thumbnail, sizes, quantity } = this.props.merch;

    const price = this.getPrice()
    const sellingSizes = this.sizeCount(sizes)
    return (
      <StyledCard
        restcolors={{ bgColor: white, color: black }}
        hovercolors={{ bgColor: lightGray, color: black }}
        style={{
          width: '12em',
          height: '100%'
        }}
        onClick={this.props.onClick}
      >
        <Card.Img src={thumbnail} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{price === 0 ? 'FREE!' : `${price}`}</Card.Subtitle>
          {(sizes && sellingSizes > 0) && 
            <Card.Text style={{ color: lightBlue }}>
              {sellingSizes} sizes available
            </Card.Text>
          }
          {
            (this.isSoldOut(quantity, sizes) && <Card.Text style={{ color: lightBlue }}>SOLD OUT!</Card.Text>)
          }
        </Card.Body>
      </StyledCard>
    )
  }
}