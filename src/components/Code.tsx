import CodeMirror from "@uiw/react-codemirror"
import "codemirror/keymap/sublime"
import "codemirror/theme/dracula.css"
import React from "react"
import { CodeContainer } from "../styles/Containers"

interface CodeProps {
	value: string
}
export const Code = (props: CodeProps) => {
	return (
		<CodeContainer>
			<CodeMirror
				value={props.value}
				options={{
					theme: "dracula",
					keyMap: "sublime",
					mode: "TypeScript",
				}}
			/>
		</CodeContainer>
	)
}
