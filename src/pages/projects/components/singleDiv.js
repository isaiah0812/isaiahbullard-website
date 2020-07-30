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
        <p>{single.description}</p>
      </Container>
    </Container>
  )
}