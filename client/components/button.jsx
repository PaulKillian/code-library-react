import React from 'react';
import Cards from './cards';

function Button() {
  return (
    <div className="mx-5 mt-5 font-code">
      <div className="d-flex justify-content-between">
        <button className="text-white w-25 mb-5"><h1 className="shadowed color">Search Videos</h1></button>
        <Cards />
      </div>
      <div className="d-flex justify-content-between">
        <button className="text-white w-25 mb-5"><h1 className="shadowed color">Search Articles</h1></button>
        <Cards />
      </div>
      <div className="d-flex justify-content-between">
        <button className="text-white w-25 mb-5"><h1 className="shadowed color">Search Books</h1></button>
        <Cards />
      </div>
      <div className="d-flex justify-content-between">
        <button className="text-white w-25 mb-5"><h1 className="shadowed color">Search Documentation</h1></button>
        <Cards />
      </div>
      <div className="d-flex justify-content-between">
        <button className="text-white w-25 mb-5"><h1 className="shadowed color">Search Art</h1></button>
        <Cards />
      </div>
      <div className="d-flex justify-content-between">
        <button className="text-white w-25 mb-5"><h1 className="shadowed color">Search Algorithom Challenges</h1></button>
        <Cards />
      </div>
    </div>
  );
}

export default Button;
