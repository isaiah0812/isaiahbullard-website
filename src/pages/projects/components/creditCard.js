import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import styled from 'styled-components';

import { 
  black, 
  darkBlue, 
  lightBlue, 
  white 
} from '../../../constants/colors';

/**
 * An anchor tag that leads to the production credit.
 * @constant
 * @name CreditLink
 * @type {import('styled-components').StyledComponent}
 * @example <CreditLink href="https://www.example.com">Credit</CreditLink>
 */
const CreditLink = styled.a`
  width: 48%;
  margin: 1%;
`

/**
 * The display for each credit.
 * @constant
 * @name CreditButton
 * @type {import('styled-components').StyledComponent}
 * @example <CreditButton>...</CreditButton>
 */
const CreditButton = styled.button`
  background-color: ${white};
  width: 100%;
	border: 0px;
	border-radius: 16px;
  text-align: center;
  font-size: 100%;
	color: ${darkBlue};
	box-shadow: none;
	transition: color 0.2s, box-shadow 0.5s;

  &:hover {
		color: ${lightBlue};
		box-shadow: 0px 2px 10px ${black};
  }
`

/**
 * The title of the credit.
 * @constant
 * @name CreditTitle
 * @type {import('styled-components').StyledComponent}
 * @example <CreditTitle>Title</CreditTitle>
 */
const CreditTitle = styled.h4`
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

/**
 * A card that displays a production credit on the Projects Page.
 * @name CreditCard
 * @author Isaiah Bullard
 * @version 1.0.0
 * @example <CreditCard credit={credit} />
 */
export default class CreditCard extends React.Component {
  render() {
    const { credit } = this.props;
    return (
      <CreditLink href={credit.link} target="_blank">
        <OverlayTrigger 
          key={credit.id}
          placement="top"
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