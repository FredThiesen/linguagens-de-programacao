import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ClassActivity, Home, ImperativeLanguage } from "./screens"

function App() {
	return (
		<>
			<Router basename="/linguagens-de-programacao">
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/ClassActivity" exact>
						<ClassActivity />
					</Route>
					<Route path="/ImperativeLanguage" exact>
						<ImperativeLanguage />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App
