import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet';
import { 
  Route, 
  Link, 
  Switch, 
  useRouteMatch 
} from 'react-router-dom';
import styled from 'styled-components';

import { silver } from '../../constants/colors';
import credits from '../../constants/credits.json';
import projects from '../../constants/projects.json';
import singles from '../../constants/singles.json';
import videos from '../../constants/videos.json';
import { 
  PageBanner, 
  PageBannerFade, 
  BannerText, 
  BannerTitle, 
  BannerCaption, 
  PageSectionTitle,
} from '../../constants/styled-components';

import banner from './assets/banner.jpg';
import AlbumCard from './components/albumCard';
import SingleCard from './components/singleCard';
import CreditCard from './components/creditCard';
import ProjectPage from './projectPage';
import YoutubeCard from './components/youtubeCard';
import { pageContainer } from '../../constants/styles';

/**
 * Container that goes around the CreditCard objects.
 * @constant
 * @name CreditSection
 * @type {import('styled-components').StyledComponent}
 * @example <CreditSection>...</CreditSection>
 */
const CreditSection = styled(Container)`
  display: flex;
  width: 50%;
  background-color: ${silver};
  padding: 1%;
  align-items: left;
  flex-wrap: wrap;

  @media (max-width: 740px) {
    width: 100%;
  }
`

/**
 * The home of the Projects page, showing all albums, singles, production credits, and other placements (to be implemented).
 * @name ProjectsHome
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <ProjectsHome />
 */
class ProjectsHome extends React.Component {
  /**
   * @constructor
   * @param {object} props Properties that may be passed when using the AlbumPlayer
   */
  constructor(props) {
    super(props);

    this.state = {
      openId: -1,
      open: undefined,
    }
  }

  render () {
    return (
      <Container fluid style={{padding: 0, width: '100%'}}>
        <Helmet>
          <title>Projects - Isaiah Bullard</title>
          <meta name="description" content="The projects page, for displaying albums, singles, and the placements of Isaiah Bullard." />
        </Helmet>
        <PageBanner fluid background={banner}>
          <PageBannerFade fluid>
            <BannerText fluid>
              <BannerTitle>Projects</BannerTitle>
              <BannerCaption>Albums, Singles, Production Credits, Placements, Stick Figures, etc.</BannerCaption>
            </BannerText>
          </PageBannerFade>
        </PageBanner>
        <Container fluid style={{...pageContainer, textAlign: 'center'}}>
          <PageSectionTitle>Albums</PageSectionTitle>
          <hr style={{width: '5%', borderWidth: 3, borderColor: silver}} />
          <Container style={{
            display: 'flex', 
            flexDirection: 'row', 
            width: '38%', 
            padding: 0, 
            flexWrap: 'wrap', 
            justifyContent: 'space-around'
          }}>
            {projects.filter(project => !project.beatTape).map((album) => 
              <Link key={album.id} to={`${this.props.url}/${album.id}`}>
                <AlbumCard title={album.title} cover={album.cover} />
              </Link>
            )}
          </Container>
          <hr style={{width: '5%', borderWidth: 3, borderColor: silver}} />
          <br />
          <PageSectionTitle id="singles">Singles</PageSectionTitle>
          <hr style={{width: '5%', borderWidth: 3, borderColor: silver}} />
          <Container fluid style={{
            width: '100%',
            padding: 0,
          }}>
            {this.state.open && (<SingleCard open single={singles[this.state.openId]} onClick={() => this.setState({
              openId: -1,
              open: undefined,
            })} />)}
            <Container style={{
              display: 'flex', 
              flexDirection: 'row', 
              flexWrap: 'wrap', 
              justifyContent: 'space-around',
              width: '38%',
            }}>
              {singles.map((single, id) => {
                if (id === this.state.openId) {
                  return false
                }
                return (<SingleCard key={single.id} single={single} onClick={() => this.setState({
                  open: single, 
                  openId: id,
                })} />)
              })}
            </Container>
          </Container>
          <hr style={{width: '5%', borderWidth: 3, borderColor: silver}} />
          <br />
          <PageSectionTitle>Credits</PageSectionTitle>
          <hr style={{width: '5%', borderWidth: 3, borderColor: silver}} />
          <CreditSection fluid>
            {credits.map((credit) => <CreditCard key={credit.id} credit={credit} />)}
          </CreditSection>
          <hr style={{width: '5%', borderWidth: 3, borderColor: silver}} />
          <br />
          <PageSectionTitle>Videos</PageSectionTitle>
          <hr style={{width: '5%', borderWidth: 3, borderColor: silver}} />
          {videos.map((video) => <YoutubeCard key={video.id} title={video.title} youtube={video.youtube} />)}
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
export default () => {
  let { path, url } = useRouteMatch();

  // Scrolls to the top when changing pages on the beats page.
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <Switch>
      {/* Loads home page for the Projects page */}
      <Route exact path={path}>
        <ProjectsHome url={url}/>
      </Route>
      {/* Loads each route for the albums */}
      {projects.filter(project => !project.beatTape).map(album => (
        <Route key={album.id} path={`${path}/${album.id}`}>
          <ProjectPage album={album} />
        </Route>
      ))}
    </Switch>
  );
}