import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import banner from './assets/banner.jpg';

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
      </Container>
    );
  }
}