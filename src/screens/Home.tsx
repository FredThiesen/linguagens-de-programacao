import React from "react"
import { useHistory } from "react-router-dom"
import { Button } from "../styles/Buttons"
import { Body, Content, Header } from "../styles/Containers"
import { Title } from "../styles/Title"

export default function Home() {
	let history = useHistory()
	function toClassActivity() {
		history.push("/ClassActivity")
	}
	return (
		<>
			<Body>
				<Header></Header>
				<Content>
					<Title>Atividades</Title>
					<Button onClick={() => toClassActivity()}>
						Classes Abstratas
					</Button>
				</Content>
			</Body>
		</>
	)
}
