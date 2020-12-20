import React from 'react';

function Card(props) {
  return (
    <iframe className="carousel-slide" width="290" height="315"
      src={props.src}>
    </iframe>
  );
}

export default Card;
