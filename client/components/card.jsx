import React from 'react'

function Card(props) {
	return (
		<div className="cards card">SAVE
			<iframe width="290" height="315"
				src={props.src}>
			</iframe>
		</div>
	)
}

export default Card
