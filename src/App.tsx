import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ClassActivity, Home } from "./screens"

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/ClassActivity" exact>
						<ClassActivity />
					</Route>
				</Switch>
			</Router>
		</>
	)
}

export default App
