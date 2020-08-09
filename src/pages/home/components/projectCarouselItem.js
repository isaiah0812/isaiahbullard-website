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
  border: 1px;
  border-color: red;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

const CarouselImage = styled.img`
  margin: 0;
`

const CarouselText = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 175%;
  height: 50%;
  padding-bottom: 2%;
  padding-top: 2%;
`

const carouselHeight = window.innerHeight * .5;

export default ({backdrop, logo, description}) => {
  return (
    <Container fluid style={{padding: 0, height: carouselHeight}}>
      <CarouselSlide fluid backdrop={backdrop}>
        <CarouselSlideFade fluid>
          <CarouselInfo>
            <Container fluid style={{display: 'flex', justifyContent: 'center', width: '50%', height: '100%'}}>
              <CarouselImage src={logo} height="100%" />
            </Container>
            <Container fluid style={{diplay: 'flex', flexDirection: 'column', height: '100%', width: '50%'}}>
              <CarouselText>{description}</CarouselText>
              <Button text={'Listen'} />
            </Container>
          </CarouselInfo>
        </CarouselSlideFade>
      </CarouselSlide>
    </Container>
  );
}