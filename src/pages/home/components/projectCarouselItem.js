import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from '../../../components/button';

const CarouselSlide = styled(Container)`
  width: 100%;
  height: 100%;
  background: url(${props => props.backdrop}) center;
  background-size: 100%;
  padding: 0px;
`

const CarouselSlideFade = styled(Container)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0px;
`

const CarouselInfo = styled(Container)`
  padding: 0px;
  height: 75%;
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  color: white;
`

const CarouselImage = styled.img`
  margin: 0;
`

const CarouselText = styled.h3`
  padding-bottom: 2%;
  padding-top: 2%;
  line-height: normal;
  font-weight: normal;
`

let carouselHeight = window.innerHeight * .5;

export default ({backdrop, logo, description}) => {
  return (
    <Container fluid style={{padding: 0, height: carouselHeight}}>
      <CarouselSlide fluid backdrop={backdrop}>
        <CarouselSlideFade fluid>
          <CarouselInfo fluid>
            <CarouselImage src={logo} height="100%" />
            <Container fluid style={{diplay: 'flex', width: '45%', alignSelf: 'center', height: 'auto', margin: 0}}>
              <CarouselText>{description}</CarouselText>
              <Button text={'Listen'} />
            </Container>
          </CarouselInfo>
        </CarouselSlideFade>
      </CarouselSlide>
    </Container>
  );
}