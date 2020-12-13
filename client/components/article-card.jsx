import React from 'react'

function ArticleCard(props) {
	return (
		<div className="cards card">
			<div className="text-white">{props.title}</div>
			<img src={props.thumbnail}></img>
		</div>
	)
}

export default ArticleCard
