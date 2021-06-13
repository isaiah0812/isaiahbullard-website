import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import styled from 'styled-components';
import { darkBlue, lightBlue } from '../../../constants/colors';

const MerchIndicator = styled(Image)`
  width: 12%;
  outline: ${props => props.selected ? `2.5px solid ${darkBlue}` : 'none'};
  margin: 1.5%;
  cursor: pointer;
  transition: outline 0.05s;
  transition-timing-function: linear;

  &:hover {
    outline: 2.5px solid ${props => props.selected ? darkBlue : lightBlue};
  }
`

const MerchIndicatorList = ({pics, activeIndex, onSelect}) => {
  return (
    pics.map((pic, index) => (
      <MerchIndicator
        src={pic}
        selected={activeIndex === index}
        onClick={() => onSelect(index)}
      />
    ))
  )
}

export default class MerchSlides extends React.Component {
  state = {
    activeIndex: 0,
  }

  handleSelect = (index) => {
    this.setState({
      activeIndex: index
    })
  }

  render() {
    return (
      <div style={{height: '100%', width: '100%', display: 'flex', flexWrap: 'wrap'}}>
        <Carousel style={{height: '88%'}} activeIndex={this.state.activeIndex} indicators={false} controls={false} fade>
          {this.props.pics.map((pic, index) => (
            <Carousel.Item key={index}>
              <Image src={pic} style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '92%',
                objectFit: 'contain'
              }} />
            </Carousel.Item>
          ))}
        </Carousel>
        <Container style={{
          width: '100%',
          height: '12%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <MerchIndicatorList pics={this.props.pics} activeIndex={this.state.activeIndex} onSelect={this.handleSelect}/>
        </Container>
      </div>
    )
  }
}