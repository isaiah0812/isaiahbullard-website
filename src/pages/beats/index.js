import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import banner from './assets/banner.jpg';
import AlbumCard from '../projects/components/albumCard';
import hj_cover from './assets/HollyJolly.png';

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

const beatTapes = [
  {
    title: "The Holly Jolly Tape",
    cover: hj_cover,
  },
];

export default class Beats extends React.Component {
  render () {
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
}