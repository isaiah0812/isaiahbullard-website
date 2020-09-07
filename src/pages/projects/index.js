import React, { useEffect } from 'react';
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

import banner from './assets/banner.jpg';
import AlbumCard from './components/albumCard';
import SingleCard from './components/singleCard';
import CreditCard from './components/creditCard';
import { singles, credits, projects } from '../../constants/music';
import { 
  PageBanner, 
  PageBannerFade, 
  BannerText, 
  BannerTitle, 
  BannerCaption, 
  PageSectionTitle,
} from '../../constants/styled-components';
import ProjectPage from './projectPage';
import { silver } from '../../constants/colors';

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

class ProjectsHome extends React.Component {
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
        <PageBanner fluid background={banner}>
          <PageBannerFade fluid>
            <BannerText fluid>
              <BannerTitle>Projects</BannerTitle>
              <BannerCaption>Albums, Singles, Production Credits, Placements, Stick Figures, etc.</BannerCaption>
            </BannerText>
          </PageBannerFade>
        </PageBanner>
        <Container fluid style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: '60px 24px'}}>
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
          <PageSectionTitle>Credits</PageSectionTitle>
          <hr style={{width: '5%', borderWidth: 3, borderColor: silver}} />
          <CreditSection fluid>
            {credits.map((credit) => <CreditCard key={credit.id} credit={credit} />)}
          </CreditSection>
        </Container>
      </Container>
    );
  }
}

export default () => {
  let { path, url } = useRouteMatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <Switch>
      <Route exact path={path}>
        <ProjectsHome url={url}/>
      </Route>
      {projects.filter(project => !project.beatTape).map(album => (
        <Route key={album.id} path={`${path}/${album.id}`}>
          <ProjectPage album={album} />
        </Route>
      ))}
    </Switch>
  );
}