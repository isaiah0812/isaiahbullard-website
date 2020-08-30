import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
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
import BeatDisplay from './components/beatDisplay';

const BeatsPageSection = styled(Container)`
  width: 48%;
  margin: 1%;
  text-align: center;

  @media (max-width: 740px) {
    width: 100%;
  }
`

/**
 * @todo make the beats pages
 * @todo routing for beats pages
 */
export default class Beats extends React.Component {
  render() {
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
                  <BeatDisplay beat={beat} />
                ))}
              </Accordion>
            </Container>
          </BeatsPageSection>
        </Container>
      </Container>
    );
  }
}