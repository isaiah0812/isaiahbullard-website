import React from 'react';
import ProjectCarousel from './components/projectCarousel';
import Container from 'react-bootstrap/container';
import HomeSection from './components/homeSection';

const sections = [
  {
    title: 'About Me',
    description: "Producer. Songwriter. Wannabe composer. That's me! I'm open to all serious inquiries that involve music. Hit the button below to contact me and let's get locked in!",
    buttonText: 'Contact',
  },
  {
    title: 'Music',
    description: "Producer. Songwriter. Wannabe composer. That's me! I'm open to all serious inquiries that involve music. Hit the button below to contact me and let's get locked in!",
    buttonText: 'More',
  },
  {
    title: 'Beats',
    description: "Producer. Songwriter. Wannabe composer. That's me! I'm open to all serious inquiries that involve music. Hit the button below to contact me and let's get locked in!",
    buttonText: 'Listen',
  },
  {
    title: 'Merch',
    description: "Producer. Songwriter. Wannabe composer. That's me! I'm open to all serious inquiries that involve music. Hit the button below to contact me and let's get locked in!",
    buttonText: 'Shop',
  },
]

export default class Home extends React.Component {
  render () {
    return (
      <Container fluid style={{padding: 0}}>
        <ProjectCarousel />
        {sections.map((section, index) => (
          <HomeSection 
            primary={index%2 === 0}
            title={section.title}
            description={section.description}
            buttonText={section.buttonText}
          />
        ))}
      </Container>
    );
  }
}