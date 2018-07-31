import React, { Component } from 'react'

class Login extends Component {
	render(){
		return (
			<div>
				<form method="GET" action="http://localhost:1234/api/users/login/me">
					<input type="text" name="email" placeholder="email" required></input>
					<input type="password" name="password" placeholder="password" required></input>
					<button type="submit">Login</button>
				</form>
			</div>
		)
	}
}

export default Login