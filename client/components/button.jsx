import React from 'react';
import Cards from './cards';

function Button() {
  return (
    <div className="container-fluid bg">
      <div className="mx-5 pt-5 font-code">
        <div className="d-flex justify-content-between">
          <div className="blur w-25 mb-5">Search Videos
            {/* <button className="text-white w-25 mb-5"><h1 className="shadowed color">Search Videos</h1></button> */}
          </div>
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
    </div>
  );
}

export default Button;
