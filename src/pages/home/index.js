import React from 'react';
import ProjectCarousel from './components/projectCarousel';
import Container from 'react-bootstrap/container';
import HomeSection from './components/homeSection';

const sections = [
  {
    title: 'About Me',
    description: "Producer. Songwriter. Wannabe composer. That's me! I'm open to all serious inquiries that involve music. Hit the button below to contact me and let's get locked in!",
    buttonText: 'Contact',
    href: '/contact',
  },
  {
    title: 'Music',
    description: "All of my music is available for digital streaming and download. Check out my entire discography and get more information about each project!",
    buttonText: 'More',
    href: '/projects',
  },
  {
    title: 'Beats',
    description: "I sell beats! Check out my latest beats and all of my beat tapes here. Everything on this page is for sale, so be sure to contact me if you're looking to work together!",
    buttonText: 'Listen',
    href: '/beats',
  },
  {
    title: 'Merch',
    description: "Merchandise coming soon.",
    buttonText: 'Shop',
    href: '/merchandise',
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
            href={section.href}
          />
        ))}
      </Container>
    );
  }
}