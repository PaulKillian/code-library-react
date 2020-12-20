import React from 'react';

function Card(props) {
  return (
    <div className="glass mx-2">
    <iframe className="carousel-slide" width="290" height="315"
      src={props.src}>
      </iframe>
    </div>
  );
}

export default Card;
