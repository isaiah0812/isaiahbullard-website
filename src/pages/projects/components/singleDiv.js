import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import SingleDivPlayer from './singleDivPlayer';

const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid ${props => props.color};
  align-self: center;
`

const SingleTitle = styled.h3`
  font-weight: normal;
`

const SingleFeatures = styled.h5`
  font-weight: normal;
`

const SingleDescription = styled.p`
  line-height: normal;
`

const SingleSongLink = styled.a`
  color: ${props => props.color};

  &:hover {
    color: ${props => props.color};
  }

  &:visited {
    color: ${props => props.color};
  }
`

export default ({single}) => {
  const textColor = (single.color < '#800000') ? '#000000' : '#FFFFFF'
  return (
    <Container style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Triangle color={single.color} />
      <Container style={{
        backgroundColor: single.color, 
        color: textColor,
        width: '100%',
        padding: '2%',
      }}>
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
        />
        <SingleSongLink href={"https://song.link/us/i/" + single.songLink} color={textColor} target="_blank">Other Sources</SingleSongLink>
      </Container>
    </Container>
  )
}