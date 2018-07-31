import React from 'react'

const OneArticle = (props) => {
	console.log(props.location.state)
	return (
		<div>
			<h2>{props.location.state.article.title}</h2>
			<p>{props.location.state.article.text}</p>
		</div>
	)
}

export default OneArticle