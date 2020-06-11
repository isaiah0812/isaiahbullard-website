import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Button from '../../../components/button';

const CarouselBackdrop = styled.img`
  width: 100%;
  object-fit: cover;
  position: center;
  -webkit-filter: brightness(49%) blur(13px);
  filter: brightness(49%) blur(13px);
`

const CarouselInfo = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 75%;
  width: 70%;
`

const CarouselImage = styled.img`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  vertical-align: middle;
`

const CarouselText = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  font-size: 175%;
`

const carouselHeight = window.innerHeight * .5;

export default class ProjectCarouselItem extends React.Component {
  render() {
    return (
      <Container fluid>
        <CarouselBackdrop src={this.props.backdrop} height={carouselHeight} />
        <CarouselInfo>
          <Container fluid style={{padding: 12}}>
            <Row sm={12}>
              <Col sm={6}>
                <CarouselImage src={this.props.logo} height={(window.innerHeight * .335)} width={(window.innerHeight * .335)} />
              </Col>
              <Col sm={6}>
                <Row sm={6}>
                  <Col sm={12} style={{paddingTop: 12, paddingBottom: 12, height: (window.innerHeight * .335)/2}}>
                    <CarouselText style={{height: ((window.innerHeight * .335)/2) - 24}}>{this.props.description}</CarouselText>
                  </Col>
                </Row>
                <Row sm={6}>
                  <Col sm={12} style={{paddingTop: 12, paddingBottom: 12, height: (window.innerHeight * .335)/2}}>
                    <Button />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </CarouselInfo>
      </Container>
    );
  }
}