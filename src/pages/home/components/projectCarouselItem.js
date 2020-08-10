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
  align-content: center;
  color: white;
`

const CarouselImage = styled.img`
  margin: 0;
  height: 100%;
  align-self: center;

  @media (max-width: 740px) {
    height: 60%;
  }
`

const CarouselText = styled.h3`
  padding-bottom: 2%;
  padding-top: 2%;
  line-height: normal;
  font-weight: normal;
  font-size: 175%;

  @media (max-width: 740px) {
    font-size: 120%
  }
`

export default ({backdrop, logo, description}) => {
  return (
    <Container fluid style={{padding: 0, height: 300}}>
      <CarouselSlide fluid backdrop={backdrop}>
        <CarouselSlideFade fluid>
          <CarouselInfo fluid>
            <CarouselImage src={logo} />
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