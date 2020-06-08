import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import Image from 'react-bootstrap/Image';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import styled from 'styled-components';

const CarouselBackdrop = styled.img`
  width: 100%;
  height: 420px;
  object-fit: cover;
  position: center;
  -webkit-filter: brightness(49%) blur(13px);
  filter: brightness(49%) blur(13px);
`

const CarouselInfo = styled.h1`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
`

const projects = [
  {
    name: 'Zae\'s Room', 
    color: 'red',
  },
  {
    name: 'The Holly Jolly Tape',
    color: 'blue',
  },
  {
    name: 'Maestro',
    color: 'green',
  },
];

export default class ProjectCarousel extends React.Component {
  render() {
    return (
      <div>
        <Carousel style={{height: 420}}>
          <CarouselItem style={{height: '100%', position: 'relative'}}>
            <CarouselBackdrop src={'/assets/home/Zaes_Room.png'} />
            <CarouselInfo>
              Hello
            </CarouselInfo>
          </CarouselItem>
        </Carousel>
      </div>
    )
  }
}