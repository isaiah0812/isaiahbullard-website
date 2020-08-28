import React, { useState } from 'react';
import AlbumCard from './albumCard';
import SingleDiv from './singleDiv';

/**
 * @todo make this a class component
 */
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
        }}
        id={single.id}
      />
      {display && (
        <SingleDiv single={single} />
      )}
    </div>
  );
}