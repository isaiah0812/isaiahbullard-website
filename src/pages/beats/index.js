import React, { useEffect, useState } from 'react';
import { 
  Route, 
  Link, 
  Switch, 
  useRouteMatch 
} from 'react-router-dom'
import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { Helmet } from 'react-helmet';


import { silver, lightBlue } from '../../constants/colors';
import { 
  PageBanner, 
  PageBannerFade, 
  BannerText, 
  BannerTitle, 
  BannerCaption, 
  PageSectionTitle,
  PageSectionInfo,
} from '../../components/styled-components';

import AlbumCard from '../projects/components/albumCard';
import ProjectPage from '../projects/projectPage';

import banner from './assets/banner.jpg';
import BeatDisplay from './components/beatDisplay';
import { pageContainer } from '../../constants/styles';

/**
 * Responsive section on the beat's page to go to vertical on Mobile mode
 * @constant
 * @name BeatsPageSection
 * @type {import('styled-components').StyledComponent}
 * @example <BeatsPageSection>...</BeatsPageSection>
 */
const BeatsPageSection = styled(Container)`
  width: 48%;
  margin: 1%;
  text-align: center;

  @media (max-width: 740px) {
    width: 100%;
    margin: 2.5% 1%;
  }
`

/**
 * The home of the beats page, showing both the beat list and the beat tape list.
 * @name BeatsHome
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <BeatsHome />
 */
class BeatsHome extends React.Component {

  state = {
    beatsLoaded: false,
    beatTapesLoaded: false,
    beats: [],
    beatTapes: [],
    beatsError: null,
    beatTapesError: null,
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/beats`)
      .then(res => res.json())
      .then((beats) => {
        this.setState({
          beatsLoaded: true,
          beats: beats
        })
      }, (error) => {
        this.setState({
          beatsLoaded: true,
          beatsError: error
        })
      })
    
    fetch(`${process.env.REACT_APP_API_URL}/projects?beatTape=true`)
      .then(res => res.json())
      .then((beatTapes) => {
        this.setState({
          beatTapesLoaded: true,
          beatTapes: beatTapes
        })
      }, (error) => {
        this.setState({
          beatTapesLoaded: true,
          beatTapesError: error
        })
      })
  }

  render() {
    return (
      <Container fluid style={{padding: 0}}>
        <Helmet>
          <title>Beats - Isaiah Bullard</title>
          <meta name="description" content="Beats and Beat Tapes for purchase by Isaiah Bullard." />
        </Helmet>
        <PageBanner fluid background={banner}>
          <PageBannerFade fluid>
            <BannerText fluid>
              <BannerTitle>Beats</BannerTitle>
              <BannerCaption>If you either want to make a record with me or fantasize about your "rap dreams", this page is for you!</BannerCaption>
            </BannerText>
          </PageBannerFade>
        </PageBanner>
        <Container fluid style={{...pageContainer, flexDirection: 'row-reverse', flexWrap: 'wrap'}}>
          <BeatsPageSection fluid>
            <PageSectionTitle>Beat Tapes</PageSectionTitle>
            <hr style={{width: '5%', borderWidth: 3, borderColor: silver}} />
            <PageSectionInfo>All beats on Beat Tapes are for sale for the same prices as normal beats.</PageSectionInfo>
            <br />
            <Container style={{width: '80%', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: 0}}>
              {this.state.beatTapesLoaded ? (
                this.state.beatTapes.map((beatTape) => (
                  <Link key={beatTape.id} to={`${this.props.url}/${beatTape.id}`}>
                    <AlbumCard title={beatTape.title} cover={beatTape.cover} />
                  </Link>
                ))
              ) : (
                <Spinner animation="border" style={{margin: '2% 0%', color: lightBlue}} />
              )}
            </Container>
          </BeatsPageSection>
          <BeatsPageSection fluid>
            <PageSectionTitle>Beats</PageSectionTitle>
            <hr style={{width: '5%', borderWidth: 3, borderColor: silver}} />
            <PageSectionInfo>
              2-Track: $100; Track-Outs: $200
              <br />
              All beats are sold exclusively and on a first-come-first-serve basis.
            </PageSectionInfo>
            <br />
            <Container fluid style={{width: '100%', padding: 0}}>
              {this.state.beatsLoaded ? (
                <Accordion>
                  {this.state.beats.map((beat) => (
                    <BeatDisplay key={beat.id} beat={beat} />
                  ))}
                </Accordion>
              ) : (
                <Spinner animation="border" style={{margin: '2% 0%', color: lightBlue}} />
              )}
            </Container>
          </BeatsPageSection>
        </Container>
      </Container>
    );
  }
}

// This has to be a functional component in order to use useRouteMatch()
/**
 * The entire beats page, including every beat tape sub route.
 * @name Beats
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <Beats />
 */
const Beats = () => {
  let { path, url } = useRouteMatch();
  const [ beatTapes, setBeatTapes ] = useState(null)
  
  if(!beatTapes) {
    fetch(`${process.env.REACT_APP_API_URL}/projects?beatTape=true`)
      .then(res => res.json())
      .then(body => {
        setBeatTapes(body)
      })
  }

  // Scrolls to the top when changing pages on the beats page.
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Switch>
      <Route exact path={path}>
        {/* Loads the home page for the beats page */}
        <BeatsHome url={url} />
      </Route>
      {/* Loads each route for the beat tapes */}
      {beatTapes && beatTapes.map(beatTape => (
        <Route key={beatTape.id} path={`${path}/${beatTape.id}`}>
          <ProjectPage album={beatTape} />
        </Route>
      ))}
    </Switch>
  );
}

export default Beats