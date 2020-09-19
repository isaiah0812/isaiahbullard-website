import React from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet';

import { sections } from '../../constants/home';

import HomeSection from './components/homeSection';
import ProjectCarousel from './components/projectCarousel';

/**
 * The Home page of the website. The landing page.
 * @name Home
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <Home />
 */
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