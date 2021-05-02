import React from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { 
  darkBlue, 
  lightBlue, 
  white,
} from '../../constants/colors';

import AlbumPlayer from './components/albumPlayer';
import BeatTapePlayer from './components/beatTapePlayer';
import SocialMediaCredit from './components/socialMediaCredit';

/**
 * Half of a project page.
 * @constant
 * @name ProjectPageSection
 * @type {import('styled-components').StyledComponent}
 * @example <ProjectPageSection>...</ProjectPageSection>
 */
const ProjectPageSection = styled(Container)`
  width: 100%;
  padding: 0px;
  display: flex;
  flex-direction: row;
  color: ${darkBlue};
  flex-wrap: wrap-reverse;
`

/**
 * The cover art of a project
 * @constant
 * @name ProjectPageCover
 * @type {import('styled-components').StyledComponent}
 * @example <ProjectPageCover src="cover.png" alt="cover" />
 */
const ProjectPageCover = styled.img`
  width: 50%;
  height: 100%;

  @media (max-width: 740px) {
    width: 100%;
  }
`

/**
 * Container with project title and release date.
 * @constant
 * @name ProjectPageHeader
 * @type {import('styled-components').StyledComponent}
 * @example <ProjectPageHeader>...</ProjectPageHeader>
 */
const ProjectPageHeader = styled(Container)`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${darkBlue};
  color: ${white};
  padding: 2%;

  @media (max-width: 740px) {
    width: 100%;
  }
`

/**
 * The text for the title of a Project
 * @constant
 * @name ProjectPageTitle
 * @type {import('styled-components').StyledComponent}
 * @example <ProjectPageTitle>Title</ProjectPageTitle>
 */
const ProjectPageTitle = styled.h1`
  font-weight: normal;
  font-size: 4.5em;
  text-align: center;

  @media (max-width: 740px) {
    font-size: 4em;
  }
`

/**
 * The text for the release date of a project.
 * @constant
 * @name ProjectPageReleaseDate
 * @type {import('styled-components').StyledComponent}
 * @example <ProjectPageReleaseDate>Date</ProjectPageReleaseDate>
 */
const ProjectPageReleaseDate = styled.h3`
  font-weight: normal;
  font-style: italic;
  text-align: center;
`

/**
 * The text displaying the title of the project above its description.
 * @constant
 * @name ProjectPageSecondaryTitle
 * @type {import('styled-components').StyledComponent}
 * @example <ProjectPageSecondaryTitle>Title</ProjectPageSecondaryTitle>
 */
const ProjectPageSecondaryTitle = styled.h2`
  font-weight: normal;
  text-align: center;
  font-size: 2.3em;
`

/**
 * A list of items on the project page.
 * @constant
 * @name ProjectPageList
 * @type {import('styled-components').StyledComponent}
 * @example <ProjectPageList><li>...</li></ProjectPageList>
 */
const ProjectPageList = styled.ul`
  list-style-type: none;
`

/**
 * A section within the project description and credits.
 * @constant
 * @name ProjectPageInfoParagraph
 * @type {import('styled-components').StyledComponent}
 * @example <ProjectPageInfoParagraph>...</ProjectPageInfoParagraph>
 */
const ProjectPageInfoParagraph = styled.div`
  margin-left: 0.75rem;
  margin-right: 0.75rem;
`

/**
 * One half of the description section on a ProjectPage, located below the cover art and header.
 * @constant
 * @name ProjectPageInfoSection
 * @type {import('styled-components').StyledComponent}
 * @example <ProjectPageInfoSection>...</ProjectPageInfoSection>
 */
const ProjectPageInfoSection = styled(Container)`
  width: 50%;
  padding: 10px;

  @media (max-width: 740px) {
    width: 100%;
  }
`

/**
 * A page displaying information about an Album or a Beat Tape. 
 * Information displayed is based on the type of project.
 * 
 * An Album contains the following information:
 * * Description
 * * Track List
 * * Features (if any)
 * * Songwriters
 * * Mixing Engineers(s)
 * * Vocal Engineer(s)
 * * Mastering Engineer(s)
 * * Artwork Artist
 * * Special Thanks
 * 
 * A Beat Tape contains the following information:
 * * Description
 * * Track List
 * * Features (if any)
 * * Samples
 * * Mixing Engineers(s)
 * * Mastering Engineer(s)
 * * Artwork Artist
 * 
 * @name ProjectPage
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <ProjectPage album={album} />
 */
export default class ProjectPage extends React.Component {
  state = {
    description: '',
  }

  album = this.props.album

  componentDidMount = () => {
    this.printDescription(this.album.description);
  }

  printDescription = (description) => {
    fetch(description)
    .then(r => r.text())
    .then(text => {
      this.setState({
        description: text,
      })
    });
  }

  render() {
    return (
      <Container fluid style={{ padding: 0 }}>
        <Helmet>
          <title>{this.album.title} - Isaiah Bullard</title>
          <meta name="description" content={`${this.album.title}, by Isaiah Bullard`} />
        </Helmet>
        <ProjectPageSection fluid>
          <ProjectPageCover src={this.album.cover} />
          <ProjectPageHeader fluid>
            <ProjectPageTitle>{this.album.title}</ProjectPageTitle>
            <ProjectPageReleaseDate>Release Date: {this.album.releaseDate}</ProjectPageReleaseDate>
          </ProjectPageHeader>
        </ProjectPageSection>
        <ProjectPageSection fluid>
          <ProjectPageInfoSection fluid>
            <Container fluid style={{width: '100%', padding: '4%', top: '7.5%'}}>
              <ProjectPageSecondaryTitle>{this.album.title}</ProjectPageSecondaryTitle>
              <ProjectPageInfoParagraph>
                {this.state.description.split('\n').map((pg, index) => {
                  return pg.length > 0 ? (<p key={index}>{pg}</p>) : "";
                })}
              </ProjectPageInfoParagraph>
              <Container fluid style={{padding: 0, display: 'flex', flexWrap: 'wrap'}}>
                <ProjectPageInfoParagraph>
                  <strong>Track List:</strong>
                  <ProjectPageList>
                    {this.album.songList.map((song, index) => <li key={index}>{song}</li>)}
                  </ProjectPageList>
                </ProjectPageInfoParagraph>
                {this.album.albumCredits.features && (
                  <ProjectPageInfoParagraph>
                    <strong>Featuring (in order of appearance):</strong>
                    <ProjectPageList>
                      {this.album.albumCredits.features.map((feature, index) => <li key={index}><SocialMediaCredit projectCredit={feature} /></li>)}
                    </ProjectPageList>
                  </ProjectPageInfoParagraph>
                )}
                {this.album.beatTape ?
                  (
                    <ProjectPageInfoParagraph>
                      <strong>Sample(s):</strong>
                      <ProjectPageList>
                        {this.album.albumCredits.samples.map((sample, index) => <li key={index}>{sample}</li>)}
                      </ProjectPageList>
                    </ProjectPageInfoParagraph>
                  ) :
                  (
                    <ProjectPageInfoParagraph>
                      <strong>Songwriter(s):</strong>
                      <ProjectPageList>
                        {this.album.albumCredits.songwriters.map((songwriter, index) => <li key={index}>{songwriter}</li>)}
                      </ProjectPageList>
                    </ProjectPageInfoParagraph>
                  )
                }
                <ProjectPageInfoParagraph>
                  <strong>Mixing Engineer(s):</strong>
                  <ProjectPageList>
                    {this.album.albumCredits.mixedBy.map((mixer, index) => <li key={index}><SocialMediaCredit projectCredit={mixer} /></li>)}
                  </ProjectPageList>
                </ProjectPageInfoParagraph>
                <ProjectPageInfoParagraph>
                  <strong>Mastering Engineer(s):</strong>
                  <ProjectPageList>
                    {this.album.albumCredits.masteredBy.map((master, index) => <li key={index}><SocialMediaCredit projectCredit={master} /></li>)}
                  </ProjectPageList>
                </ProjectPageInfoParagraph>
                <ProjectPageInfoParagraph>
                  <strong>Artwork By:</strong>
                  <ProjectPageList>
                    {this.album.albumCredits.artworkBy.map((artist, index) => <li key={index}><SocialMediaCredit projectCredit={artist} /></li>)}
                  </ProjectPageList>
                </ProjectPageInfoParagraph>
                {this.album.albumCredits.specialThanks && (
                  <ProjectPageInfoParagraph>
                    <strong>Special Thanks:</strong>
                    <ProjectPageList>
                      {this.album.albumCredits.specialThanks.map((thanks, index) => <li key={index}><SocialMediaCredit projectCredit={thanks} /></li>)}
                    </ProjectPageList>
                  </ProjectPageInfoParagraph>
                )}
              </Container>
            </Container>
          </ProjectPageInfoSection>
          <ProjectPageInfoSection fluid style={{backgroundColor: lightBlue}}>
            <Container fluid style={{padding: '4%', width: '100%', position: 'sticky', top: '9%', display: 'flex', flexDirection: 'column'}}>
              <ProjectPageSecondaryTitle style={{color: white}}>Listen</ProjectPageSecondaryTitle>
              {this.album.beatTape ? <BeatTapePlayer beatTape={this.album} /> : <AlbumPlayer album={this.album} />}
            </Container>
          </ProjectPageInfoSection>
        </ProjectPageSection>
      </Container>
    )
  }
}