import React from 'react';

const navItemBasis = {
  paddingLeft: 12,
  paddingRight: 12,
}

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: 'false',
      navItemStyle: {
        ...navItemBasis,
        color: '#FFFFFF',
      }
    }
  }

  toggleHover = () => {
    this.setState({
      hover: this.state.hover === 'true' ? 'false' : 'true',
      navItemStyle: {
        ...navItemBasis,
        color: this.state.hover === 'true' ? '#FFFFFF' : '#29B3F1',
      }
    });
  }

  render() {
    return (
      <div style={{...this.state.navItemStyle, textAlign: 'center', fontSize: '125%'}} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        {this.props.name}
      </div>
    );
  }
}