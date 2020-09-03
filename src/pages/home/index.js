import React from 'react';
import ProjectCarousel from './components/projectCarousel';
import Container from 'react-bootstrap/container';
import HomeSection from './components/homeSection';
import { sections } from '../../constants/home';

export default class Home extends React.Component {
  render() {
    return (
      <Container fluid style={{padding: 0}}>
        <ProjectCarousel />
        {sections.map((section, index) => (
          <HomeSection 
            key={index}
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
}