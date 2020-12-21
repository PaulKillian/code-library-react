import React from 'react';

function Card(props) {
  const code = `<style>* { padding: 0; margin: 0; overflow: hidden } img, span{ top: 0; bottom: 0; right: 3rem;} span{ width: 300px; height: 1.5em; text - align: center; font: 48px / 1.5 sans - serif; color: white; text - shadow: 0 0 0.5em black }.title{ font: 24px / 1.5 sans - serif; color: white; position: absolute; left: 55px; top: 10px; }</style > <a href=https://www.youtube.com/embed/${props.id}?autoplay=1&amp;start=0><img src=https://img.youtube.com/vi/${props.id}/hqdefault.jpg alt='Review by Phones and stuff'><span>▶</span></a><span class='title'>Review by Phones and stuff</span>`
  return (
    <div className="glass">
      <iframe className="ml-2 pt-1 shadow shadow" width="100%" height="315"
        src={props.src}
        srcDoc={code}
        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
      </iframe>
    </div>
  );
}

export default Card;
