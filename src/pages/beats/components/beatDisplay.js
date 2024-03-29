import React from 'react';
import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import Button from '../../../components/button';

import { 
  darkBlue, 
  white, 
  youtubeRed 
} from '../../../constants/colors';

/**
 * Accordion item in the beat list on the Beats page.
 * @constant
 * @name BeatButton
 * @type {import('styled-components').StyledComponent}
 * @example <BeatButton cover="beat.jpg">...</BeatButon>
 */
const BeatButton = styled.button`
  width: 100%;
  height: 96px;
  border: 0px;
  background: url(${props => props.cover}) no-repeat center;
  background-size: 100%;
  padding: 0px;
`

/**
 * Fade effect over a BeatButton
 * @constant
 * @name BeatButtonHover
 * @type {import('styled-components').StyledComponent}
 * @example <BeatButtonHover>...</BeatButtonHover>
 */
const BeatButtonHover = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.0);
  align-items: center;
  justify-content: center;
  color: transparent;
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: ${white};
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`

/**
 * Title of a Beat in the beat list on the Beats page.
 * @constant
 * @name BeatButtonTitle
 * @type {import('styled-components').StyledComponent}
 * @example <BeatButtonTitle>Title</BeatButtonTitle>
 */
const BeatButtonTitle = styled.h2`
  font-weight: normal;
  width: 100%;
`

/**
 * The container containing the name, tempo, key signature, and sale status of a beat
 * @constant
 * @name BeatSectionInfoBlock
 * @type {import('styled-components').StyledComponent}
 * @example <BeatSectionInfoBlock>...</BeatSectionInfoBlock>
 */
const BeatSectionInfoBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
  align-items: center;
  align-self: center;
`

/**
 * The Title of a beat within the BeatSectionInfoBlock
 * @constant
 * @name BeatSectionTitle
 * @type {import('styled-components').StyledComponent}
 * @example <BeatSectionTitle>Title</BeatSectionTitle>
 */
const BeatSectionTitle = styled.h4`
  font-weight: normal;
  text-align: center;
`

/**
 * Information on the beat (key signature, tempo) shown in the BeatSectionInfoBlock
 * @constant
 * @name BeatSectionInfo
 * @type {import('styled-components').StyledComponent}
 * @example <BeatSectionInfo>Tempo: 140bpm</BeatSectionInfo>
 */
const BeatSectionInfo = styled.h6`
  font-weight: normal;
  text-align: left;
`

/**
 * An accordion Item in the Beat list on the Beats page
 * @name BeatDisplay
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <BeatDisplay beat={beat} />
 */
export default class BeatDisplay extends React.Component {
  render() {
    const { beat } = this.props;

    return (
      <Card style={{border: 0}}>
        <Accordion.Toggle as={BeatButton} cover={beat.cover} eventKey={beat.id}>
          <BeatButtonHover>
            <BeatButtonTitle>{beat.title}{beat.sold && " [SOLD]"}</BeatButtonTitle>
          </BeatButtonHover>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={beat.id}>
          <Card.Body style={{backgroundColor: darkBlue, color: white, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <BeatSectionInfoBlock>
              <BeatSectionTitle>{beat.title}{beat.sold && " [SOLD]"}</BeatSectionTitle>
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
            <hr style={{width: '50%', borderWidth: 1, borderColor: white}} />
            <Container fluid style={{width: '100%', height: 300, backgroundColor: youtubeRed, padding: 0}}>
              <iframe id="player" title="beat" type="text/html" allowFullScreen style={{width: '100.1%', height: '100.2%', border: 0}} src={`https://www.youtube.com/embed/${beat.youtube}`}/>
            </Container>
            <hr style={{width: '50%', borderWidth: 1, borderColor: white}} />
            <Container fluid style={{padding: 0, display: 'flex', justifyContent: 'center'}}>
              <Button text={'Purchase'} href={'/contact'} />
            </Container>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    )
  }
}