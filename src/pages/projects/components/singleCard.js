import React, { useState } from 'react';
import AlbumCard from './albumCard';
import SingleDiv from './singleDiv';

export default ({single, onClick, open}) => {
  const [display, setDisplay] = useState(open);

  return (
    <div>
      <AlbumCard 
        title={single.title} 
        cover={single.cover} 
        onClick={() => {
          onClick && onClick()
          setDisplay(!display)
        }
      }/>
      {display && (
        <SingleDiv single={single} />
      )}
    </div>
  );
}