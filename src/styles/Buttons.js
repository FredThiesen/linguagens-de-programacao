import styled from "styled-components"

export const Button = styled.button`
	border: none;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #05386b;
	height: 3.3rem;
	width: auto;
	color: #edf5e1;
	font-size: 1.15rem;
	padding: 25px 35px;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background: #edf5e1;
		color: #05386b;
		transition: 200ms ease-in-out;
	}
`
export const SmallButton = styled.button`
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #05386b;
	height: 1.9rem auto;

	color: #edf5e1;
	font-size: 1.3rem;
	padding: 10px 60px;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background: #edf5e1;
		color: #05386b;
		transition: 200ms ease-in-out;
	}
`
