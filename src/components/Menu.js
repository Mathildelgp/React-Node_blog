import React from 'react'
import Login from './Login'
import {Link} from 'react-router-dom'

const Menu = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <Link className="navbar-brand" to="/">SUPER BLOG</Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNav">
			    <ul className="navbar-nav">
			      <li className="nav-item">
			        <Link className="nav-link" to="users/signup">SIGN UP</Link>
			      </li>
			      <li className="nav-item">
			        <Link className="nav-link" to="/articles">ALL ARTICLES</Link>
			      </li>
			      <li className="nav-item">
			        <Link className="nav-link" to="/articles/add">ADD ARTICLE</Link>
			      </li>
			    </ul>
			  </div>
			  <Login />
			</nav>
		</div>
	)
}

export default Menu