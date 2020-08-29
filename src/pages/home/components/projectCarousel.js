import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import ProjectCarouselItem from './projectCarouselItem';
import { carousel } from '../../../constants/carousel';

/**
 * @todo make this a class component
 */
export default () => {
  return (
    <Carousel style={{height: 300}} interval={5000}>
      {carousel.map((entry) => (
        <CarouselItem style={{height: '100%'}}>
          <ProjectCarouselItem 
            backdrop={entry.backdrop} 
            logo={entry.logo} 
            description={entry.description} 
            link={entry.link} 
          />
        </CarouselItem>
      ))}
    </Carousel>
  )
}