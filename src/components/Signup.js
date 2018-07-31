import React from 'react'

const Signup = () => {
	return (
		<div>
			<form method="POST" action="http://localhost:1234/api/users/signup">
				<h1>REGISTER</h1>
				<br/>
				<input type="text" name="firstName" placeholder="first Name" required></input>
				<br/>
				<input type="text" name="lastName" placeholder="last Name" required></input>
				<br/>
				<input type="text" name="email" placeholder="email" required></input>
				<br/>
				<input type="password" name="password" placeholder="password" required></input>
				<br/>
				<input type="number" name="role" placeholder="role" required></input>
				<br/>
				<button type="submit">REGISTER</button>
			</form>
			<br/>
		</div>
	)
}

export default Signup