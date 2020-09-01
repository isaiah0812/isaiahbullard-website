import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import styled from 'styled-components';

const CreditLink = styled.a`
  width: 48%;
  margin: 1%;
`

const CreditButton = styled.button`
  background-color: #FFFFFF;
  width: 100%;
	border: 0px;
	border-radius: 16px;
  text-align: center;
  font-size: 100%;
	color: #040B30;
	box-shadow: none;
	transition: color 0.2s, box-shadow 0.5s;

  &:hover {
		color: #29B3F1;
		box-shadow: 0px 2px 10px #000000;
  }
`

const CreditTitle = styled.h4`
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export default class CreditCard extends React.Component {
  render() {
    const { credit } = this.props;
    return (
      <CreditLink href={credit.link} target="_blank">
        <OverlayTrigger 
          key={credit.id}
          placement="right"
          overlay={
            <Tooltip id={`tooltip-${credit.id}`}>
              {credit.title} - {credit.artist}
            </Tooltip>
          }
        >
          <CreditButton>
            <CreditTitle>{credit.title} - {credit.artist}</CreditTitle>
            Click to listen
          </CreditButton>
        </OverlayTrigger>
      </CreditLink>
    )
  }
}