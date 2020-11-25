import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';

import carousel from '../../../constants/carousel.json';

import ProjectCarouselItem from './projectCarouselItem';

/**
 * The Carousel that displays on the Home Page, showing the latest projects from Isaiah Bullard
 * @name ProjectCarousel
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <ProjectCarousel />
 */
export default class ProjectCarousel extends React.Component {
  render() {    
    return (
      <Carousel style={{minHeight: 300}} interval={5000}>
        {carousel.map((entry, index) => {
          return (
            <CarouselItem key={index} style={{height: '100%'}}>
              <ProjectCarouselItem 
                backdrop={entry.backdrop} 
                logo={entry.logo} 
                description={entry.description} 
                link={entry.link} 
              />
            </CarouselItem>
          )
        })}
      </Carousel>
    );
  }
}