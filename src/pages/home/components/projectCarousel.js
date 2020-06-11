import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import ProjectCarouselItem from './projectCarouselItem';

const carouselHeight = window.innerHeight * .5;

export default class ProjectCarousel extends React.Component {
  render() {
    return (
      <Carousel style={{height: carouselHeight}}>
        <CarouselItem style={{height: '100%', position: 'relative'}}>
          <ProjectCarouselItem />
        </CarouselItem>
      </Carousel>
    )
  }
}