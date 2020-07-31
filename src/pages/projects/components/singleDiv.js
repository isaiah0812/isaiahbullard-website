import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

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

export default ({single}) => {
  return (
    <Container style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Triangle color={single.color} />
      <Container style={{
        backgroundColor: single.color, 
        color: ((single.color < '#800000') ? '#000000' : '#FFFFFF'),
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
        <iframe src="https://open.spotify.com/embed/track/1fZHvbksavmt5XEtAmTBCR" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" title="Spotify"></iframe>
        <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" style={{width: '100%  ', maxWidth: '660px', overflow: 'hidden', background: 'transparent'}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/evil-plan-feat-louiev-t-fuze/1506525081?i=1506525082" title="Apple Music"></iframe>
        <iframe style={{border: 0, width: '100%', height: '120px'}} src="https://bandcamp.com/EmbeddedPlayer/track=2329859596/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless title="Bandcamp"><a href="http://isaiahbullard.bandcamp.com/track/evil-plan-feat-louiev-t-fuze">Evil Plan (feat. LouieV T &amp; FUZE) by Isaiah Bullard</a></iframe>
        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/795101182&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" title="Soundcloud"></iframe>
      </Container>
    </Container>
  )
}