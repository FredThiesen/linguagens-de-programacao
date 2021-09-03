import * as ts from "typescript"

export const executePython = (code: string) => {
	let result = ts.transpile(code)
	console.clear()
	eval(result)
	alert(
		"Veja os resultados no console!" +
			"\nCtrl + Shift + i para abrir o console!"
	)
}
