import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import ProjectCarouselItem from './projectCarouselItem';
import { carousel } from '../../../constants/carousel';

export default class ProjectCarousel extends React.Component {
  render() {
    return (
      <Carousel style={{minHeight: 300}} interval={5000}>
        {carousel.map((entry, index) => (
          <CarouselItem key={index} style={{height: '100%'}}>
            <ProjectCarouselItem 
              backdrop={entry.backdrop} 
              logo={entry.logo} 
              description={entry.description} 
              link={entry.link} 
            />
          </CarouselItem>
        ))}
      </Carousel>
    );
  }
}