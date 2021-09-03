import styled from "styled-components"

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	height: 10%;
	width: 100%;
	background: #5cdb95;
`
export const Body = styled.div`
	width: 100vw;
	height: 100vh;
	background: #5cdb95;
	/* background: linear-gradient(to bottom, rgb(83, 105, 148), rgb(41, 46, 73)); */
	display: flex;

	align-items: center;
	flex-direction: column;
`

export const Content = styled.div`
	padding: 40px 0px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 70%;
	height: 85%;
	flex-direction: column;
`
export const CodeContainer = styled.div`
	max-height: 80%;
	width: 100%;
`
export const Row = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`
