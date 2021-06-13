import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

import { SongLink } from '../../../components/styled-components';
import { black, white } from '../../../constants/colors';

import SingleDivPlayer from './singleDivPlayer';

/**
 * The triangle in the dingle player
 * @constant
 * @name Triangle
 * @type {import('styled-components').StyledComponent}
 * @example <Triangle color="red" />
 */
const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid ${props => props.color};
  align-self: center;
`

/**
 * The title of the single going in the info block.
 * @constant
 * @name SingleTitle
 * @type {import('styled-components').StyledComponent}
 * @example <SingleTitle>Title</SingleTitle>
 */
const SingleTitle = styled.h3`
  font-weight: normal;
`

/**
 * Text for the list of features on a single.
 * @constant
 * @name SingleFeatures
 * @type {import('styled-components').StyledComponent}
 * @example <SingleFeatures>Features</SingleFeatures>
 */
const SingleFeatures = styled.h5`
  font-weight: normal;
`

/**
 * The text for the paragraph describing a single.
 * @constant
 * @name SingleDescription
 * @type {import('styled-components').StyledComponent}
 * @example <SingleDescription>Some words...</SingleDescription>
 */
const SingleDescription = styled.p`
  line-height: normal;
`

/**
 * The block that contains the information and player for the single.
 * @constant
 * @name SingleBox
 * @type {import('styled-components').StyledComponent}
 * @example <SingleBox backgroundColor="red" color="white">...</SingleBox>
 */
const SingleBox = styled(Container)`
  background-color: ${props => props.backgroundcolor};
  color: ${props => props.color};
  width: 60%;
  padding: 2%;

  @media (max-width: 740px) {
    width: 100%;
    padding: 3px;
  }
`

/**
 * A container that opens when a single is clicked on the Projects page.
 * @name SingleDiv
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <SingleDiv single={single} />
 */
export default class SingleDiv extends React.Component {
  render() {
    const { single } = this.props;
    const textColor = (single.color < '#800000') ? black : white;
    
    return (
      <Container fluid style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
      }}>
        <Triangle color={single.color} />
        <SingleBox fluid backgroundcolor={single.color} color={textColor}>
          <SingleTitle>{single.title}</SingleTitle>
          {single.features && (
            <SingleFeatures>feat. {single.features.map((feature, id) => {
              if(id === single.features.length - 2) return feature + " "
              else if(id === single.features.length - 1) return "& " + feature
              else return feature + ", "
            })}</SingleFeatures>
          )}
          <SingleDescription>{single.description}</SingleDescription>
          <p>Release Date: {single.releaseDate}</p>
          <SingleDivPlayer 
            spotify={single.spotify}
            apple={single.apple}
            bandcamp={single.bandcamp}
            soundcloud={single.soundcloud}
            textColor={textColor}
          />
          <SongLink href={"https://song.link/" + single.songLink} color={textColor} target="_blank">Other Sources</SongLink>
        </SingleBox>
      </Container>
    );
  }
}