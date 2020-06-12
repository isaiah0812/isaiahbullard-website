import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Button from '../../../components/button';

const SectionTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10vh;
`

const SectionDescription = styled.div`
  position: relative;
  font-size: 3vh;
`

export default class HomeSection extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row style={{height: (window.innerHeight * .5), backgroundColor: this.props.primary ? '#040B30' : '#FFFFFF', color: this.props.primary ? '#FFFFFF' : '#040B30'}}>
          <Col sm={6}>
            <SectionTitle>{this.props.title}</SectionTitle>
          </Col>
          <Col sm={6}>
            <Row style={{height: (window.innerHeight * .25), padding: 24, display: 'flex', alignItems: 'flex-end'}}>
              <SectionDescription>
                {this.props.description}
              </SectionDescription>
            </Row>
            <Row style={{height: (window.innerHeight * .25), padding: 24}}>
              <Button text={this.props.buttonText} secondary={!this.props.primary} />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}