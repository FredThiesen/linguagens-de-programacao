import React from "react"
import { useHistory } from "react-router-dom"
import { Button } from "../styles/Buttons"
import { Body, Content, Header, Row } from "../styles/Containers"
import { Title } from "../styles/Title"

export default function Home() {
	let history = useHistory()
	function toClassActivity(path: string) {
		history.push(path)
	}
	return (
		<>
			<Body>
				<Header></Header>
				<Content>
					<Title>Atividades</Title>
					<Row>
						<Button
							onClick={() =>
								toClassActivity("/ImperativeLanguage")
							}
						>
							Linguagens Imperativas
						</Button>
						<Button
							onClick={() => toClassActivity("/ClassActivity")}
						>
							Classes Abstratas
						</Button>
					</Row>
				</Content>
			</Body>
		</>
	)
}
