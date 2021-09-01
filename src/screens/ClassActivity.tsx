import React from "react"
import { Link, Redirect, useHistory } from "react-router-dom"

export default function ClassActivity() {
	let history = useHistory()
	function back() {
		history.push("/")
	}
	return (
		<>
			<button onClick={() => back()}>Voltar</button>
		</>
	)
}
