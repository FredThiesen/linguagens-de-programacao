import styled from "styled-components"

export const Button = styled.button`
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #333;
	height: 3.3rem;
	width: auto;
	color: white;
	font-size: 1.15rem;
	padding: 25px 35px;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background: #444;
		transition: 200ms ease-in-out;
	}
`
export const BackButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #333;
	height: 1.9rem;
	width: 1rem;
	color: white;
	font-size: 1.3rem;
	padding: 10px 60px;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background: #444;
		transition: 200ms ease-in-out;
	}
`
