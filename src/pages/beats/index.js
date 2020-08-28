import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import banner from './assets/banner.jpg';
import AlbumCard from '../projects/components/albumCard';
import { beats, beatTapes } from '../../constants/music';
import { 
  PageBanner, 
  PageBannerFade, 
  BannerText, 
  BannerTitle, 
  BannerCaption, 
  PageSectionTitle,
  PageSectionInfo,
} from '../../constants/styled-components';

const BeatsPageSection = styled(Container)`
  width: 48%;
  margin: 1%;
  text-align: center;

  @media (max-width: 740px) {
    width: 100%;
  }
`

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

/**
 * @todo add buttons links to contact form
 * @todo migrate all of the components to components folder
 * @todo make this a class component
 */
export default () => {
  return (
    <Container fluid style={{padding: 0}}>
      <PageBanner fluid background={banner}>
        <PageBannerFade fluid>
          <BannerText fluid>
            <BannerTitle>Beats</BannerTitle>
            <BannerCaption>You either want to make a record or fantasize about your "rap dreams". This page is for you!</BannerCaption>
          </BannerText>
        </PageBannerFade>
      </PageBanner>
      <Container fluid style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center', flexWrap: 'wrap', padding: '60px 24px'}}>
        <BeatsPageSection fluid>
          <PageSectionTitle>Beat Tapes</PageSectionTitle>
          <hr style={{width: '5%', borderWidth: 3, borderColor: '#707070'}} />
          <PageSectionInfo>All beats on Beat Tapes are for sale for the same prices as normal beats.</PageSectionInfo>
          <br />
          <Container style={{width: '80%', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: 0}}>
            {beatTapes.map((beatTape) => <AlbumCard title={beatTape.title} cover={beatTape.cover} onClick={() => alert("Album Clicked")} />)}
          </Container>
        </BeatsPageSection>
        <BeatsPageSection fluid>
          <PageSectionTitle>Beats</PageSectionTitle>
          <hr style={{width: '5%', borderWidth: 3, borderColor: '#707070'}} />
          <PageSectionInfo>
            2-Track: $40; Track-Outs: $80
            <br />
            All beats are sold exclusively and on a first-come-first-serve basis.
          </PageSectionInfo>
          <br />
          <Container fluid style={{width: '100%', padding: 0}}>
            <Accordion>
              {beats.map((beat) => (
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
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Container>
        </BeatsPageSection>
      </Container>
    </Container>
  );
}