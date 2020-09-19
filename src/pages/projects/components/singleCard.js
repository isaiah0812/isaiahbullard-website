import React from 'react';

import AlbumCard from './albumCard';
import SingleDiv from './singleDiv';

/**
 * An album card that's made for a single, with single information.
 * @constant
 * @name SingleCard
 * @type {import('styled-components').StyledComponent}
 * @example <SingleCard open />
 */
export default class SingleCard extends React.Component {
  /**
   * @constructor
   * @param {object} props Properties that may be passed when using the AlbumPlayer
   */
  constructor(props) {
    super(props);

    this.state = {
      display: this.props.open,
    }
  }

  render() {
    const { single, onClick } = this.props;
    return (
      <div>
        <AlbumCard 
          title={single.title} 
          cover={single.cover} 
          onClick={() => {
            onClick && onClick()
            this.setState({
              display: !this.state.display,
            })
          }}
          id={single.id}
        />
        {this.state.display && (
          <SingleDiv single={single} />
        )}
      </div>
    );
  }
}