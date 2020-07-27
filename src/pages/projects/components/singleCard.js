import React, { useState } from 'react';
import AlbumCard from './albumCard';
import Container from 'react-bootstrap/Container';

export default ({title, cover, onClick, open}) => {
  const [display, setDisplay] = useState(open);

  return (
    <div>
      <AlbumCard 
        title={title} 
        cover={cover} 
        onClick={() => {
          onClick && onClick()
          setDisplay(!display)
        }
      }/>
      {display && (
        <Container style={{backgroundColor: 'red', width: '100%'}}>
          Hello
        </Container>
      )}
    </div>
  );
}