import React from 'react';
import ProjectCarousel from './components/projectCarousel';
import Container from 'react-bootstrap/Container';
import HomeSection from './components/homeSection';
import { sections } from '../../constants/home';
import { Helmet } from 'react-helmet';

export default class Home extends React.Component {
  render() {
    return (
      <Container fluid style={{padding: 0}}>
        <Helmet>
          <title>Home - Isaiah Bullard</title>
          <meta name="description" content="The informational website for Isaiah Bullard, Producer, Composer, and Songwriter." />
        </Helmet>
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