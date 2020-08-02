import React from 'react';
import styled from 'styled-components';

const CreditButton = styled.button`
	background-color: #FFFFFF;
	border: 0px;
	padding: 1%;
	width: 50%;
	height: 84px;
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

export default () => {
	return (
		<CreditButton>
			Hello
		</CreditButton>
	)
}