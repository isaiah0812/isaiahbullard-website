import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { 
  white, 
  black, 
  darkBlue, 
  silver 
} from './colors';

/**
 * Banner object from each page
 * @constant
 * @name PageBanner
 * @type {import('styled-components').StyledComponent}
 * @example <PageBanner background="banner.jpg">...</PageBanner>
 */
export const PageBanner = styled(Container)`
  width: 100%;
  height: 225px;
  background: url(${props => props.background}) no-repeat center;
  background-size: 100%;
  padding: 0px;
`

/**
 * Fade effect over the PageBanner
 * @constant
 * @name PageBannerFade
 * @type {import('styled-components').StyledComponent}
 * @example <PageBannerFade>...</PageBannerFade>
 */
export const PageBannerFade = styled(Container)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  padding: 0px;
`

/**
 * Container where all text in a PageBanner lies
 * @constant
 * @name BannerText
 * @type {import('styled-components').StyledComponent}
 * @example <BannerText>...</BannerText>
 */
export const BannerText = styled(Container)`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;

  @media (max-width: 740px) {
    width: 100%;
    padding: 4px;
  }
`

/**
 * The Page title, located inside of a PageBanner
 * @constant
 * @name Banner
 * @type {import('styled-components').StyledComponent}
 * @example <BannerTitle>Title</BannerTitle>
 */
export const BannerTitle = styled.h1`
  color: ${white};
  text-align: center;
  font-weight: normal;
`

/**
 * Sub-header text for a PageBanner
 * @constant
 * @name BannerCaption
 * @type {import('styled-components').StyledComponent}
 * @example <BannerCaption>Banner Caption with some words</BannerCaption>
 */
export const BannerCaption = styled.h5`
  color: ${white};
  text-align: center;
  font-weight: normal;
`

/**
 * The header above a section of a certain page
 * @constant
 * @name PageSectionTitle
 * @type {import('styled-components').StyledComponent}
 * @example <PageSectionTitle>Title</PageSectionTitle>
 */
export const PageSectionTitle = styled.h2`
  color: ${darkBlue};
  text-align: center;
  font-size: 5vh;
  line-height: 0px;
`

/**
 * Informational text that may help in navigating the page
 * @constant
 * @name PageSectionInfo
 * @type {import('styled-components').StyledComponent}
 * @example <PageSectionInfo>More info on the page</PageSectionInfo>
 */
export const PageSectionInfo = styled.h6`
  margin: 0;
  color: ${silver};
  text-align: center;
`

/**
 * A responsive Tab for the Single and Album Players
 * @constant
 * @name PlayerTab
 * @type {import('styled-components').StyledComponent}
 * @example <PlayerTab eventKey="key" color="red">Key</PlayerTab>
 */
export const PlayerTab = styled(Nav.Link)`
  color: ${props => props.color};
  font-size: 100%;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 740px) {
    font-size: 74%;
  }

  &:hover {
    color: ${props => props.color === white ? black : white};
  }
`

/**
 * Anchor that leads to the one link page genrated by song.link
 * @constant
 * @name SongLink
 * @type {import('styled-components').StyledComponent}
 * @example <SongLink color="red" href="https://www.example.com">Other Sources</SongLink>
 */
export const SongLink = styled.a`
  color: ${props => props.color};
  text-align: center;
  font-size: 1.2em;
  display: flex;
  justify-content: center;

  &:hover {
    color: ${props => props.color};
  }

  &:visited {
    color: ${props => props.color};
  }
`

/**
 * Surrounding Layer for Player Tab to get the background color effects
 * @constant
 * @name PlayerSelector
 * @type {import('styled-components').StyledComponent}
 * @example <PlayerSelector bg="red" album={1} />
 */
export const PlayerSelector = styled(Nav.Item)`
  background-color: ${props => props.bg};
  border-radius: ${props => props.album ? '10px 0px 0px 10px' : '10px 10px 0px 0px'};
  border: 0px;
  width: 100%;

  @media (max-width: 575px) {
    border-radius: ${props => props.album ? '10px 10px 10px 10px' : '10px 10px 0px 0px'};
  }
`