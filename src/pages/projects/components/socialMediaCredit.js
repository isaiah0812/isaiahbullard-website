import React from 'react';
import styled from 'styled-components';

import { black } from '../../../constants/colors';

const SMCAnchor = styled.a`
  color: ${black};

  &:hover {
    color: ${black};
  }

  &:visited {
    color: ${black};
  }
`

export default class SocialMediaCredit extends React.Component {
  render() {
    const { projectCredit } = this.props;

    if (projectCredit.username) {
      return (
        <SMCAnchor 
          href={`https://www.${projectCredit.instagram ? 'instagram' : 'twitter'}.com/${projectCredit.username}`}
          target="_blank"
        >
          {projectCredit.name} (@{projectCredit.username})
        </SMCAnchor>
      )
    }
    else {
      return (
        <div>
          {projectCredit.name}
        </div>
      )
    }
  }
}