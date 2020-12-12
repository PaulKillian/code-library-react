import React from 'react'

function BookCard(props) {
	return (
		<div className="cards card">
			<div className="text-white px-2 py-2">{props.title}</div>
				<img src={props.thumbnail}></img>
		</div>
	)
}

export default BookCard
