import { Container, Nav } from 'react-bootstrap';
import styled from 'styled-components';

export const PageBanner = styled(Container)`
  width: 100%;
  height: 225px;
  background: url(${props => props.background}) no-repeat center;
  background-size: 100%;
  padding: 0px;
`

export const PageBannerFade = styled(Container)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4.5px);
  padding: 0px;
`

export const BannerText = styled(Container)`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;

  @media (max-width: 740px) {
    width: 100%;
    padding: 4px;
  }
`

export const BannerTitle = styled.h1`
  color: #FFFFFF;
  text-align: center;
  font-weight: normal;
`

export const BannerCaption = styled.h5`
  color: #FFFFFF;
  text-align: center;
  font-weight: normal;
`

export const PageSectionTitle = styled.h2`
  color: #040B30;
  text-align: center;
  font-size: 5vh;
`

export const PageSectionInfo = styled.h6`
  margin: 0;
  color: #707070;
  text-align: center;
`

export const PlayerTab = styled(Nav.Link)`
  color: ${props => props.color};
  font-size: 100%;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 740px) {
    font-size: 74%;
  }

  &:hover {
    color: ${props => props.color === '#FFFFFF' ? '#000000' : '#FFFFFF'};
  }
`

export const SongLink = styled.a`
  color: ${props => props.color};
  text-align: center;
  font-size: 1.2em;

  &:hover {
    color: ${props => props.color};
  }

  &:visited {
    color: ${props => props.color};
  }
`

export const PlayerSelector = styled(Nav.Item)`
  background-color: ${props => props.bg};
  border-radius: ${props => props.album ? '10px 0px 0px 10px' : '10px 10px 0px 0px'};
  border: 0px;
  width: 100%;

  @media (max-width: 575px) {
    border-radius: ${props => props.album ? '10px 10px 10px 10px' : '10px 10px 0px 0px'};
  }
`