import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import ProjectCarouselItem from './projectCarouselItem';
import zr_cover from '../assets/Zaes_Room.png';
import zr_logo from '../assets/ZaesRoom_Logo.png';
import hj_cover from '../assets/Holly_Jolly.png';
import hj_logo from '../assets/HollyJolly_Logo.png';
import ma_cover from '../assets/Maestro.png';
import ma_logo from '../assets/Maestro_Logo.png';

const carouselHeight = window.innerHeight * .5;

const projects = [
  {
    name: "Zae's Room",
    backdrop: zr_cover,
    logo: zr_logo,
    description: '#GraduationIsSoon. Coming 2020.',
  },
  {
    name: "The Holly Jolly Tape",
    backdrop: hj_cover,
    logo: hj_logo,
    description: '#GraduationIsSoon. Coming 2020.',
  },
  {
    name: "Maestro",
    backdrop: ma_cover,
    logo: ma_logo,
    description: '#GraduationIsSoon. Coming 2020.',
  },
]

export default class ProjectCarousel extends React.Component {
  render() {
    return (
      <Carousel style={{height: carouselHeight}}>
        {projects.map((project) => (
          <CarouselItem style={{height: '100%'}}>
            <ProjectCarouselItem backdrop={project.backdrop} logo={project.logo} description={project.description} />
          </CarouselItem>
        ))}
      </Carousel>
    )
  }
}