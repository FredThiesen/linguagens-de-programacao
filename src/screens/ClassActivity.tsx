import React from "react"
import { useHistory } from "react-router-dom"
import { activity as code } from "../codes/classActivity"
import { Code } from "../components/Code"
import { BackButton } from "../styles/Buttons"
import { Body, Content, Header } from "../styles/Containers"
import { Title } from "../styles/Title"
export default function ClassActivity() {
	let history = useHistory()
	function back() {
		history.push("/")
	}
	return (
		<>
			<Body>
				<Header />
				<Content>
					<Title>Atividade de Classe Abstrata (aula 4)</Title>
					<Code value={code}></Code>
					<BackButton onClick={() => back()}>Voltar</BackButton>
				</Content>
			</Body>
		</>
	)
}
