import React from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet';

import { 
  PageBanner, 
  PageBannerFade, 
  BannerText, 
  BannerTitle, 
  BannerCaption, 
  PageSectionTitle,
} from '../../constants/styled-components';

import banner from './assets/banner.jpg';

/**
 * The Merchandise page, yet to be implemented.
 * @name Merchandise
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <Merchandise />
 */
export default class Merchandise extends React.Component {
  render() {
    return (
      <Container fluid style={{padding: 0}}>
        <Helmet>
          <title>Merchandise - Isaiah Bullard</title>
          <meta name="description" content="Merchandise store for Isaiah Bullard. To be implemented." />
        </Helmet>
        <PageBanner fluid background={banner}>
          <PageBannerFade fluid>
            <BannerText fluid>
              <BannerTitle>Merchandise</BannerTitle>
              <BannerCaption>Merchandise coming soon.</BannerCaption>
            </BannerText>
          </PageBannerFade>
        </PageBanner>
        <Container style={{padding: 60, height: '55vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <PageSectionTitle>Coming Soon</PageSectionTitle>
        </Container>
      </Container>
    );
  }
}