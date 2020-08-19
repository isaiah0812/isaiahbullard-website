import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const PageBanner = styled(Container)`
  width: 100%;
  height: 250px;
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