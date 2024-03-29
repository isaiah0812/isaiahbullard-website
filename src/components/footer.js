import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { 
  faFacebook, 
  faInstagram,
  faTwitter,
  faTiktok,
  faSpotify,
  faBandcamp,
  faSoundcloud,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import {ReactComponent as AppleMusicLogo} from '../assets/Apple_Music_Icon_blk.svg';

import { 
  white, 
  black, 
  silver, 
  spotifyGreen, 
  applePink, 
  bandcampBlue, 
  soundcloudOrange, 
  youtubeRed 
} from '../constants/colors';
import {
  StyledFaIcon
} from './styled-components'

/**
 * A styled Apple Music SVG object, used because FontAwesome doesn't have the apple music logo
 * @constant
 * @type {import('styled-components').StyledComponent}
 * @name StyledAppleMusicIcon
 * @example <StyledAppleMusicIcon color="red" />
 */
const StyledAppleMusicIcon = styled(AppleMusicLogo)`
  fill: ${white};
  margin: .4em;

  &:hover {
    fill: ${props => props.color};
  }
`

/**
 * Common height and width of the footer icons.
 * @constant
 * @name iconDimensions
 * @type {object}
 */
const iconDimensions = {
  width: '2.75em',
  height: '2.75em',
}

/**
 * The Footer container with all social media links
 * @name Footer
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <Footer />
 */
export default class Footer extends React.Component {
  render() {
    return (
      <Container fluid style={{padding: 0, backgroundColor: silver}}>
        <Container style={{padding: '2%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '80%'}}>
          <a href="https://www.facebook.com/zaemadethis" target="_blank" rel="noopener noreferrer"><StyledFaIcon icon={faFacebook} color="#4267B2" style={iconDimensions} /></a>
          <a href="https://www.instagram.com/zaemadethis" target="_blank" rel="noopener noreferrer"><StyledFaIcon icon={faInstagram} color="#E1306C" style={iconDimensions} /></a>
          <a href="https://www.twitter.com/zaemadethis" target="_blank" rel="noopener noreferrer"><StyledFaIcon icon={faTwitter} color="#1DA1F2" style={iconDimensions} /></a>
          <a href="https://www.tiktok.com/@zaemadethis" target="_blank" rel="noopener noreferrer"><StyledFaIcon icon={faTiktok} color={black} style={iconDimensions} /></a>
          <a href="https://open.spotify.com/artist/0idP6NmikrVzi8j9fDPIo6" target="_blank" rel="noopener noreferrer"><StyledFaIcon icon={faSpotify} color={spotifyGreen} style={iconDimensions} /></a>
          <a href="https://music.apple.com/us/artist/isaiah-bullard/1422919410" target="_blank" rel="noopener noreferrer"><StyledAppleMusicIcon style={iconDimensions} color={applePink} /></a>
          <a href="https://isaiahbullard.bandcamp.com/" target="_blank" rel="noopener noreferrer"><StyledFaIcon icon={faBandcamp} color={bandcampBlue} style={iconDimensions}/></a>
          <a href="https://www.soundcloud.com/isaiah_bullard" target="_blank" rel="noopener noreferrer"><StyledFaIcon icon={faSoundcloud} color={soundcloudOrange} style={iconDimensions} /></a>
          <a href="https://www.youtube.com/channel/UCMMDfi3G5xXLj7vVqq9yr9w" target="_blank" rel="noopener noreferrer"><StyledFaIcon icon={faYoutube} color={youtubeRed} style={iconDimensions} /></a>
        </Container>
      </Container>
    );
  }
}