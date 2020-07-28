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

export default ({color}) => {
  return (
    <Container style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Triangle color={color} />
      <Container style={{backgroundColor: color, width: '100%'}}>
        Hello
      </Container>
    </Container>
  )
}