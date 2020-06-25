import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import banner from './assets/banner.jpg';
import ProjectCard from './components/projectCard';
import zr_cover from './assets/Zaes_Room.PNG';

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

export default class Projects extends React.Component {
  render () {
    return (
      <Container fluid style={{padding: 0}}>
        <PageBanner>
          <BannerImage src={banner} height={bannerSize} />
          <BannerText>
            <BannerTitle>Projects</BannerTitle>
            <BannerCaption>Albums, Singles, Production Credits, Placements, Stick Figures, etc.</BannerCaption>
          </BannerText>
        </PageBanner>
        <Container fluid style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: 60}}>
          <PageSectionTitle>Albums</PageSectionTitle>
          <hr style={{width: '5%', borderWidth: 3, borderColor: '#707070'}} />
          <Container style={{display: 'flex', flexDirection: 'row', width: '40%', padding: 0, flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
            <ProjectCard title={"Zae's Room"} cover={zr_cover} />
          </Container>
        </Container>
      </Container>
    );
  }
}