import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Card(props) {
	return (
			<iframe height="100vh" className="carousel-iframe"
				src={props.src}>
			</iframe>
	);
}
