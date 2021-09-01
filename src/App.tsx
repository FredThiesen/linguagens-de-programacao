import React from "react"

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"

import { Home, ClassActivity } from "./screens"
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
