import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import banner from './assets/banner.jpg';
import AlbumCard from '../projects/components/albumCard';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import hj_cover from './assets/beatTapes/HollyJolly.png';

import eb_cover from './assets/beats/8_Bit.png';
import ar_cover from './assets/beats/Argentina.png';
import bi_cover from './assets/beats/Birds.png';
import cr_cover from './assets/beats/Crispy.png';
import de_cover from './assets/beats/Dexter.png';
import di_cover from './assets/beats/Discover.png';
import gs_cover from './assets/beats/Gangsta_Symphony.png';
import gu_cover from './assets/beats/Gunslinger.png';
import la_cover from './assets/beats/Laughter.png';
import lc_cover from './assets/beats/Luke_Cage.png';
import mb_cover from './assets/beats/MakeBelieve.png';
import pm_cover from './assets/beats/Pacman.png';
import pt_cover from './assets/beats/Primetime.png';
import ta_cover from './assets/beats/Tattoos.png';
import tm_cover from './assets/beats/TMNT.png';
import vi_cover from './assets/beats/Virtuoso.jpg';

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

const BeatButton = styled.button`
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
`

const beats = [
  {
    title: "8-Bit",
    cover: eb_cover,
    id: "8-bit",
    youtube: 'qTwnXDdWcSw',
  },
  {
    title: "Argentina",
    cover: ar_cover,
    id: "argentina",
    youtube: 'uJfq9FYBjKw',
  },
  {
    title: "Birds",
    cover: bi_cover,
    id: "birds",
    youtube: 'K0z40_Pm3uw',
  },
  {
    title: "Crispy",
    cover: cr_cover,
    id: "crispy",
    youtube: 'H6KaS-izPIc',
  },
  {
    title: "Dexter",
    cover: de_cover,
    id: "dexter",
    youtube: 'TCnoe1IIqL4',
  },
  {
    title: "Discover",
    cover: di_cover,
    id: "discover",
    youtube: 'e-66HcQUZYM',
  },
  {
    title: "Gangsta Symphony",
    cover: gs_cover,
    id: "gangsta-symphony",
    youtube: 'qdNes5V1UEQ',
  },
  {
    title: "Gunslinger",
    cover: gu_cover,
    id: "gunslinger",
    youtube: '_V-SCWio3ao',
  },
  {
    title: "Laughter",
    cover: la_cover,
    id: "laughter",
    youtube: 'AbMocRL-RsA',
  },
  {
    title: "Luke Cage",
    cover: lc_cover,
    id: "luke-cage",
    youtube: 'sqtcQOwGFzY',
  },
  {
    title: "Make Believe",
    cover: mb_cover,
    id: "make-believe",
    youtube: 'N1VzywunJAA',
  },
  {
    title: "Pacman",
    cover: pm_cover,
    id: "pacman",
    youtube: 'OTKCNJH9_ig',
  },
  {
    title: "Primetime",
    cover: pt_cover,
    id: "primetime",
    youtube: 'EqJCc4jFvhg',
  },
  {
    title: "Tattoos",
    cover: ta_cover,
    id: "tattoos",
    youtube: 'P3nTHd8IOSM',
  },
  {
    title: "TMNT",
    cover: tm_cover,
    id: "tmnt",
    youtube: 'duhUAWe79rg',
  },
  {
    title: "Virtuoso",
    cover: vi_cover,
    id: "virtuoso",
    youtube: 'A1jwLZbWVBQ',
  },
]

const beatTapes = [
  {
    title: "The Holly Jolly Tape",
    cover: hj_cover,
  },
];

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
      <Container fluid style={{display: 'flex', paddingLeft: 0, paddingRight: 0, paddingTop: 60, paddingBottom: 60}}>
        <Container style={{width: '50%'}}>
          <PageSectionTitle>Beats</PageSectionTitle>
          <hr style={{width: '5%', borderWidth: 3, borderColor: '#707070'}} />
          <Container style={{width: '80%'}}>
            <Accordion>
              {beats.map((beat) => (
                <Card style={{border: 0}}>
                  <Accordion.Toggle as={BeatButton} cover={beat.cover} eventKey={beat.id}>
                    <BeatButtonHover>
                      <BeatButtonTitle>{beat.title}</BeatButtonTitle>
                    </BeatButtonHover>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={beat.id}>
                    <Card.Body style={{backgroundColor: '#040B30'}}>
                      <iframe id="player" title="beat" type="text/html" width="100%" src={"http://www.youtube.com/embed/" + beat.youtube + "?enablejsapi=1&origin=zaemadethis.com"} frameborder="0"></iframe>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Container>
        </Container>
        <Container style={{width: '50%'}}>
          <PageSectionTitle>Beat Tapes</PageSectionTitle>
          <hr style={{width: '5%', borderWidth: 3, borderColor: '#707070'}} />
          <Container style={{width: '80%', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
            {beatTapes.map((beatTape) => <AlbumCard title={beatTape.title} cover={beatTape.cover} onClick={() => alert("Album Clicked")} />)}
          </Container>
        </Container>
      </Container>
    </Container>
  );
}