import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import banner from './assets/banner.jpg';
import AlbumCard from '../projects/components/albumCard';
import { beats, beatTapes } from '../../constants/music';

const bannerSize = window.innerHeight * .4;

const PageBanner = styled.div`
  width: 100%;
  height: ${bannerSize};
  position: relative;
`

const BannerImage = styled.img`
  width: 100%;
  object-fit: cover;
  position: center;
  filter: brightness(48%) blur(4.5px);
  -webkit-filter: brightness(48%) blur(4.5px);
`

const BannerText = styled.div`
  width: 25%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const BannerTitle = styled.h1`
  color: #FFFFFF;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  font-size: 9.5vh;
  font-weight: normal;
`

const BannerCaption = styled.h4`
  color: #FFFFFF;
  text-align: center;
  position: relative;
  top: 70%;
  font-size: 2.3vh;
  font-weight: normal;
`

const PageSectionTitle = styled.h2`
  color: #040B30;
  text-align: center;
  font-size: 5vh;
`

const PageSectionInfo = styled.h6`
  margin: 0;
  color: #707070;
`

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

export default () => {
  return (
    <Container fluid style={{padding: 0}}>
      <PageBanner>
        <BannerImage src={banner} height={bannerSize} />
        <BannerText>
          <BannerTitle>Beats</BannerTitle>
          <BannerCaption>You either want to make a record or fantasize about your "rap dreams". This page is for you!</BannerCaption>
        </BannerText>
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
          <PageSectionInfo>2-Track: $40; Track-Outs: $80</PageSectionInfo>
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
                        <iframe id="player" title="beat" type="text/html" style={{width: '100.1%', height: '100%', border: 0}} src={"http://www.youtube.com/embed/" + beat.youtube + "?enablejsapi=1&origin=zaemadethis.com"}></iframe>
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