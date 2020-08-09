import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
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
`

const carouselHeight = window.innerHeight * .5;

export default ({backdrop, logo, description}) => {
  return (
    // <Container fluid style={{border: 1, borderStyle: 'solid', borderColor: 'red', padding: 0}}>
    //   <CarouselBackdrop src={this.props.backdrop} height={carouselHeight} />
    //   <CarouselInfo>
    //     <Container fluid style={{padding: 12}}>
    //       <Row sm={12}>
    //         <Col sm={6}>
    //           <CarouselImage src={this.props.logo} height={(window.innerHeight * .335)} width={(window.innerHeight * .335)} />
    //         </Col>
    //         <Col sm={6}>
    //           <Row sm={6}>
    //             <Col sm={12} style={{paddingTop: 12, paddingBottom: 12, height: (window.innerHeight * .335)/2}}>
    //               <CarouselText style={{height: ((window.innerHeight * .335)/2) - 24}}>{this.props.description}</CarouselText>
    //             </Col>
    //           </Row>
    //           <Row sm={6}>
    //             <Col sm={12} style={{paddingTop: 12, paddingBottom: 12, height: (window.innerHeight * .335)/2}}>
    //               <Button text={'Listen'} />
    //             </Col>
    //           </Row>
    //         </Col>
    //       </Row>
    //     </Container>
    //   </CarouselInfo>
    // </Container>
    <Container fluid style={{padding: 0, height: carouselHeight}}>
      <CarouselSlide fluid backdrop={backdrop}>
        <CarouselSlideFade fluid>
          <CarouselInfo>
            <Container fluid style={{display: 'flex', justifyContent: 'flex-end', width: '50%', height: '100%'}}>
              <CarouselImage src={logo} height="100%" />
            </Container>
            <Container fluid style={{diplay: 'flex', flexDirection: 'column', height: '100%', width: '50%'}}>
              <CarouselText>Hello</CarouselText>
              <Button text={'Listen'} />
            </Container>
          </CarouselInfo>
        </CarouselSlideFade>
      </CarouselSlide>
    </Container>
  );
}