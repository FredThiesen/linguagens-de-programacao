import { executionAsyncResource } from "async_hooks"
import React from "react"
import { useHistory } from "react-router-dom"
import { activity as code } from "../codes/classActivity"
import { Code } from "../components/Code"
import { SmallButton } from "../styles/Buttons"
import { Body, Content, Header, Row } from "../styles/Containers"
import { Title } from "../styles/Title"
import { executeTypescript } from "../functions/executeTypescript"
export default function ClassActivity() {
	let history = useHistory()
	function back() {
		history.push("/")
	}
	function execute() {
		executeTypescript(code)
	}
	return (
		<>
			<Body>
				<Header />
				<Content>
					<Title>Atividade de Classe Abstrata (aula 4)</Title>
					<Code value={code} mode={"TypeScript"}></Code>
					<Row>
						<SmallButton onClick={() => back()}>Voltar</SmallButton>
						<SmallButton onClick={() => execute()}>
							Executar Código
						</SmallButton>
					</Row>
				</Content>
			</Body>
		</>
	)
}
