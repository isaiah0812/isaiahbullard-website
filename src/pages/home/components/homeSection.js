import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Button from '../../../components/button';
import { darkBlue, white } from '../../../constants/colors';

const SectionTitle = styled.h3`
  font-weight: normal;
  font-size: 80px;
  width: 50%;
  text-align: center;

  @media (max-width: 740px) {
    font-size 40px;
    width: 100%;
  }
`

const SectionInfo = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0;
  margin: 0;
  align-items: flex-start;

  @media (max-width: 740px) {
    width: 100%;
    align-items: center;
  }
`

const SectionDescription = styled.div`
  font-size: 150%;
  margin: 2% 0%;

  @media (max-width: 740px) {
    font-size: 85%;
    text-align: center;
  }
`

export default class HomeSection extends React.Component {

  render() {
    const { primary, title, description, buttonText, href } = this.props;

    return (
      <Container 
        fluid 
        style={{
          padding: '2%', 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: primary ? darkBlue : white, 
          color: primary ? white : darkBlue,
        }}
      >
        <SectionTitle>{title}</SectionTitle>
        <SectionInfo fluid>
          <SectionDescription>{description}</SectionDescription>
          <Button text={buttonText} secondary={!primary ? 'true' : 'false'} href={href} />
        </SectionInfo>
      </Container>
    );
  }
}