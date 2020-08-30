import React from 'react';
import styled from 'styled-components';
import { Accordion, Card, Container } from 'react-bootstrap';
import Button from '../../../components/button';

const BeatButton = styled.button`
  width: 100%;
  height: 96px;
  border: 0px;
  background: url(${props => props.cover}) no-repeat center;
  background-size: 100%;
  padding: 0px;
`

const BeatButtonHover = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.0);
  align-items: center;
  justify-content: center;
  color: transparent;
  backdrop-filter: blur(0px);
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: #FFFFFF;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
  }
`

const BeatButtonTitle = styled.h2`
  font-weight: normal;
  width: 100%;
`
const BeatSectionInfoBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
  align-items: center;
  align-self: center;
`
const BeatSectionTitle = styled.h4`
  font-weight: normal;
  text-align: center;
`

const BeatSectionInfo = styled.h6`
  font-weight: normal;
  text-align: left;
`

export default class BeatDisplay extends React.Component {
  render() {
    const { beat } = this.props;

    return (
      <Card style={{border: 0}}>
        <Accordion.Toggle as={BeatButton} cover={beat.cover} eventKey={beat.id}>
          <BeatButtonHover>
            <BeatButtonTitle>{beat.title}</BeatButtonTitle>
          </BeatButtonHover>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={beat.id}>
          <Card.Body style={{backgroundColor: '#040B30', color: '#FFFFFF', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <BeatSectionInfoBlock>
              <BeatSectionTitle>{beat.title}</BeatSectionTitle>
              <BeatSectionInfo>
                <ul style={{listStyleType: 'circle', margin: 0}}>
                  <li style={{padding: 2}}>
                    Key Signature: {beat.keySignature}
                  </li>
                  <li style={{padding: 2}}>
                    Tempo: {`${beat.tempo}bpm`}
                  </li>
                </ul>
              </BeatSectionInfo>
            </BeatSectionInfoBlock>
            <hr style={{width: '50%', borderWidth: 1, borderColor: '#FFFFFF'}} />
            <Container fluid style={{width: '100%', height: 300, backgroundColor: '#FF0000', padding: 0}}>
              <iframe id="player" title="beat" type="text/html" style={{width: '100.1%', height: '100.2%', border: 0}} src={"http://www.youtube.com/embed/" + beat.youtube + "?enablejsapi=1&origin=zaemadethis.com"}></iframe>
            </Container>
            <hr style={{width: '50%', borderWidth: 1, borderColor: '#FFFFFF'}} />
            <Container fluid style={{padding: 0, display: 'flex', justifyContent: 'center'}}>
              <Button text={'Purchase'} href={'/contact'} />
            </Container>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  }
}