import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

import banner from './assets/banner.jpg';
import AlbumCard from './components/albumCard';
import SingleCard from './components/singleCard';
import CreditCard from './components/creditCard';
import { albums, singles, credits } from '../../constants/projects';

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

const CreditSection = styled(Container)`
  display: flex;
  width: 50%;
  background-color: #707070;
  padding: 1%;
  align-items: left;
  flex-wrap: wrap;

  @media (max-width: 740px) {
    width: 100%;
  }
`

export default () => {
  const [openId, setOpenId] = useState(-1)
  const [open, setOpen] = useState(undefined)

  return (
    <Container fluid style={{padding: 0}}>
      <PageBanner>
        <BannerImage src={banner} height={bannerSize} />
        <BannerText>
          <BannerTitle>Projects</BannerTitle>
          <BannerCaption>Albums, Singles, Production Credits, Placements, Stick Figures, etc.</BannerCaption>
        </BannerText>
      </PageBanner>
      <Container fluid style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: '60px 24px'}}>
        <PageSectionTitle>Albums</PageSectionTitle>
        <hr style={{width: '5%', borderWidth: 3, borderColor: '#707070'}} />
        <Container style={{
          display: 'flex', 
          flexDirection: 'row', 
          width: '38%', 
          padding: 0, 
          flexWrap: 'wrap', 
          justifyContent: 'space-around'
        }}>
          {albums.map((album) => <AlbumCard title={album.title} cover={album.cover} onClick={() => alert("Album Clicked")} />)}
        </Container>
        <PageSectionTitle id="singles">Singles</PageSectionTitle>
        <hr style={{width: '5%', borderWidth: 3, borderColor: '#707070'}} />
        <Container fluid style={{
          width: '100%',
          padding: 0,
        }}>
          {open && (<SingleCard open single={singles[openId]} onClick={() => {
            setOpen(undefined)
            setOpenId(-1)
          }} />)}
          <Container style={{
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            justifyContent: 'space-around',
            width: '38%',
          }}>
            {singles.map((single, id) => {
              if (id === openId) {
                return false
              }
              return (<SingleCard single={single} onClick={() => {
                setOpen(single)
                setOpenId(id)
              }} />)
            })}
          </Container>
        </Container>
        <PageSectionTitle>Credits</PageSectionTitle>
        <hr style={{width: '5%', borderWidth: 3, borderColor: '#707070'}} />
        <CreditSection fluid>
          {credits.map((credit) => <CreditCard credit={credit} />)}
        </CreditSection>
      </Container>
    </Container>
  );
}