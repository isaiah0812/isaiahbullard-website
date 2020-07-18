import React from 'react';
import AlbumCard from './albumCard';
import Container from 'react-bootstrap/Container';

export default class SingleCard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      open: false,
    }
  }
  render() {
    return (
      <div>
        <AlbumCard title={this.props.title} cover={this.props.cover} />
        <Container style={{backgroundColor: 'red', width: '100%'}}>
          Hello
        </Container>
      </div>
    );
  }
}