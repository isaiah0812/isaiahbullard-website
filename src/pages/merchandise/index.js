import React from 'react';
import { Container } from 'react-bootstrap';
import banner from './assets/banner.jpg';
import { 
  PageBanner, 
  PageBannerFade, 
  BannerText, 
  BannerTitle, 
  BannerCaption, 
  PageSectionTitle,
} from '../../constants/styled-components';

export default class Merchandise extends React.Component {
  render() {
    return (
      <Container fluid style={{padding: 0}}>
        <PageBanner fluid background={banner}>
          <PageBannerFade fluid>
            <BannerText fluid>
              <BannerTitle>Merchandise</BannerTitle>
              <BannerCaption>Merchandise coming soon ;)</BannerCaption>
            </BannerText>
          </PageBannerFade>
        </PageBanner>
        <Container style={{padding: 60}}>
          <PageSectionTitle>Coming Soon</PageSectionTitle>
        </Container>
      </Container>
    );
  }
}