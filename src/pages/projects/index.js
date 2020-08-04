import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import banner from './assets/banner.jpg';
import AlbumCard from './components/albumCard';
import SingleCard from './components/singleCard';
import CreditCard from './components/creditCard';
import ma_cover from './assets/Maestro.PNG';
import zr_cover from './assets/Zaes_Room.PNG';
import bt_cover from './assets/Big_Thangs2.JPG';
import ep_cover from './assets/Evil_Plan2.png';
import fl_cover from './assets/Fast_Lane.png';

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

const albums = [
  {
    title: "Maestro",
    cover: ma_cover,
  },
  {
    title: "Zae's Room",
    cover: zr_cover,
  },
];

const singles = [
  {
    title: "Fast Lane",
    cover: fl_cover,
    color: '#F4750E',
    features: ["CoreyArnell", "FUZE"],
    description: "No microphones were burned in the making of this recording. Please leave this type of rapping to the professionals and do not try this at home.",
    releaseDate: "03.01.2019",
    spotify: "0zZMvZ0BBAILDipQln4i8O",
    apple: "fast-lane-supersonic-freestyle-feat-coreyarnell-fuze/1476867846",
    bandcamp: "389561544",
    soundcloud: "659974718",
    songLink: "1476867847",
  },
  {
    title: "Big Thangs",
    cover: bt_cover,
    color: '#FF0008',
    features: ["CoreyArnell", "May"],
    description: "The first single from Zae's Room. A banger if there ever was one. CoreyArnell is Wes Clinton. May is...well, May. If you're looking for that song to have your girl twerk to, you've come to the right place.",
    releaseDate: "03.06.2020",
    spotify: "1X6m8uL9AoGdFEMHtaUnso",
    apple: "big-thangs-feat-coreyarnell-may/1502027667",
    bandcamp: "1119170738",
    soundcloud: "771594130",
    songLink: "1502027668",
  },
  {
    title: "Evil Plan",
    cover: ep_cover,
    color: '#30FFB9',
    features: ["LouieV T", "FUZE"],
    description: "The second single from Zae's Room. This beat took 20 minutes to make, and it's still the hardest song you might hear in your life. Trust me, this will get the party going.",
    releaseDate: "04.10.2020",
    spotify: "1fZHvbksavmt5XEtAmTBCR",
    apple: "evil-plan-feat-louiev-t-fuze-single/1506525081",
    bandcamp: "2329859596",
    soundcloud: "795101182",
    songLink: "1506525082",
  },
]

const credits = [
  {
    title: "Safari",
    artist: "FUZE",
    link: "https://soundcloud.com/igotwoezz/safari-feat-subzero-prod",
  },
  {
    title: "Toonami",
    artist: "Community Service",
    link: "https://soundcloud.com/community-service/toonami",
  },
]

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
      <Container fluid style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: 60}}>
        <PageSectionTitle>Albums</PageSectionTitle>
        <hr style={{width: '5%', borderWidth: 3, borderColor: '#707070'}} />
        <Container style={{
          display: 'flex', 
          flexDirection: 'row', 
          width: '40%', 
          padding: 0, 
          flexWrap: 'wrap', 
          justifyContent: 'space-around'
        }}>
          {albums.map((album) => <AlbumCard title={album.title} cover={album.cover} onClick={() => alert("Album Clicked")} />)}
        </Container>
        <PageSectionTitle>Singles</PageSectionTitle>
        <hr style={{width: '5%', borderWidth: 3, borderColor: '#707070'}} />
        <Container style={{
          width: '40%',
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
        <Container style={{
          display: 'flex', 
          width: '40%', 
          backgroundColor: '#707070', 
          padding: '1%', 
          alignItems: 'left', 
          flexWrap: 'wrap'}}
        >
          {credits.map((credit) => <CreditCard credit={credit} />)}
        </Container>
      </Container>
    </Container>
  );
}