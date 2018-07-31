import React, { Component } from 'react'
import { Link }  from 'react-router-dom'

class ArticleList extends Component {
	state = {
		articles:[]
	}
	componentDidMount(){
		fetch('http://localhost:1234/api/articles/')
		.then(res => res.json())
		.then(body => this.setState({ articles : body.docs }))
		.catch(err => { throw err })
	}
	render(props){
		return(
			<div className="blockCards">
				{this.state.articles.map((article, index) =>
					<ul className="card" key={index}>
						<li><h4>{article.title}</h4></li>
						<li>
							<Link to={{
								pathname:`/articles/${article._id}`,
								state:{article}
							}}>
								Read More</Link>
						</li>
					</ul>
				)}
			</div>
		)
	}
}

export default ArticleList