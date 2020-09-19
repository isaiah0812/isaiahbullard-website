import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

import Button from '../../../components/button';

/**
 * The background image on a ProjectCarousel's slide
 * @constant
 * @name CarouselSlide
 * @type {import('styled-components').StyledComponent}
 * @example <CarouselSlide backdrop="backdrop.jpg">...</CarouselSlide>
 */
const CarouselSlide = styled(Container)`
  width: 100%;
  min-height: 300px;
  background: url(${props => props.backdrop}) center;
  background-size: 100%;
  padding: 0px;
`

/**
 * The fade effect over a CarouselSlide
 * @constant
 * @name CarouselSlideFade
 * @type {StyledComponent}
 * @example <CarouselSlideFade>...</CarouselSlideFade>
 */
const CarouselSlideFade = styled(Container)`
  width: 100%;
  min-height: 300px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0px;
  display: flex;
  justify-content: center;
`

/**
 * A section on th CarouselSlide
 * @constant
 * @name CarouselInfo
 * @type {import('styled-components').StyledComponent}
 * @example <CarouselInfo>...</CarouselInfo>
 */
const CarouselInfo = styled(Container)`
  padding: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-wrap: wrap;
  align-self: center;
`

/**
 * A logo for a project
 * @name CarouselImage
 * @type {import('styled-components').StyledComponent}
 * @example <CarouselImage src="logo.png" alt="logo" />
 */
const CarouselImage = styled.img`
  margin: 0;
  align-self: flex-end;
  width: 50%;

  @media (max-width: 740px) {
    align-self: center;
    width: 27.5%;
  }
`

/**
 * The short text describing the project
 * @constant
 * @name CarouselText
 * @type {import('styled-components').StyledComponent}
 * @example <CarouselText>Some text...</CarouselText>
 */
const CarouselText = styled.h3`
  padding: 2% 0%;
  line-height: normal;
  font-weight: normal;
  font-size: 175%;
  width: 80%;
  text-align: left;

  @media (max-width: 740px) {
    font-size: 110%;
    text-align: center;
    padding: 0% 0%;
  }
`

/**
 * Container containing the text and button on a CarouselSlide
 * @constant
 * @name CarouselInfoSection
 * @type {import('styled-components').StyledComponent}
 * @example <CarouselInfoSection>...</CarouselInfoSection>
 */
const CarouselInfoSection = styled(Container)`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  margin: 0% 5%;

  @media (max-width: 740px) {
    width: 100%;
    align-items: center;
    margin: 0% 2%;
    height: 50%;
  }
`

/**
 * One slide on a the ProjectCarousel on the Home page.
 * @name ProjectCarouselItem
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <ProjectCarouselItem backdrop="backdrop.png" logo="logo.png" description="Description of things" link="https://example.com/project_page" />
 */
export default class ProjectCarouselItem extends React.Component {
  render() {
    const { 
      backdrop, 
      logo, 
      description, 
      link 
    } = this.props;
    return (
      <Container fluid style={{padding: 0, minHeight: 300}}>
        <CarouselSlide fluid backdrop={backdrop}>
          <CarouselSlideFade fluid>
            <CarouselInfo>
              <CarouselInfoSection>
                <CarouselImage src={logo} />
              </CarouselInfoSection>
              <CarouselInfoSection>
                <CarouselText>{description}</CarouselText>
                <Button text={'Listen'} href={link} />
              </CarouselInfoSection>
            </CarouselInfo>
          </CarouselSlideFade>
        </CarouselSlide>
      </Container>
    );
  }
}