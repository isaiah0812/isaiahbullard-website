import React from 'react';
import ProjectCarousel from './components/projectCarousel';
import Container from 'react-bootstrap/container';
import HomeSection from './components/homeSection';
import { sections } from '../../constants/home';

/**
 * @todo Make this a class component
 * @todo link to project pages
 */
export default () => {
  return (
    <Container fluid style={{padding: 0}}>
      <ProjectCarousel />
      {sections.map((section, index) => (
        <HomeSection 
          primary={index%2 === 0}
          title={section.title}
          description={section.description}
          buttonText={section.buttonText}
          href={section.href}
        />
      ))}
    </Container>
  );
}