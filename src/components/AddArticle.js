import React from 'react'

const AddArticle = () => {
	return (
		<div>
			<form method="POST" action="http://localhost:1234/api/articles/" encType="multipart/form-data">
				<input type="text" name="title" placeholder="entrer un titre" required></input>
				<input type="text" name="text" placeholder="écrire l'article" required></input>
				<button type="submit">Ajouter</button>
			</form>
		</div>
	)
}

export default AddArticle