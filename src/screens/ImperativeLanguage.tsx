import { executionAsyncResource } from "async_hooks"
import React from "react"
import { useHistory } from "react-router-dom"
import { activity as code } from "../codes/imperativeLanguage"
import { Code } from "../components/Code"
import { SmallButton } from "../styles/Buttons"
import { Body, Content, Header, Row } from "../styles/Containers"
import { Title } from "../styles/Title"
import { executePython } from "../functions/executePython"
export default function ImperativeLanguage() {
	let history = useHistory()
	function back() {
		history.push("/")
	}
	function showDescription() {}
	return (
		<>
			<Body>
				<Header />
				<Content>
					<Title>Linguagens Imperativas (Aula 2)</Title>
					<Code value={code} mode={"Python"}></Code>
					<Row>
						<SmallButton onClick={() => back()}>Voltar</SmallButton>
						<SmallButton onClick={() => showDescription()}>
							Descrição
						</SmallButton>
					</Row>
				</Content>
			</Body>
		</>
	)
}
