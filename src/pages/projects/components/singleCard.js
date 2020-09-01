import React from 'react';
import AlbumCard from './albumCard';
import SingleDiv from './singleDiv';

export default class SingleCard extends React.Component {
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