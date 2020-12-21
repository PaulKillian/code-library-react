import React from 'react';

function Card(props) {
  const code = `<style>* { padding: 0; margin: 0; overflow: hidden }html, body{ height:100%} img, span{ position: absolute; width: 100 %; top: 0; bottom: 0; margin: auto } span{ height: 1.5em; text - align: center; font: 48px / 1.5 sans - serif; color: white; text - shadow: 0 0 0.5em black }.title{ font: 24px / 1.5 sans - serif; color: white; position: relative; left: 20px; top: 10px; }</style > <a href=https://www.youtube.com/embed/${props.id}?autoplay=1&amp;start=0><img src=https://img.youtube.com/vi/${props.id}/hqdefault.jpg alt='Review by Phones and stuff'><span>▶</span></a><span class='title'>Review by Phones and stuff</span>`
  return (
    // <iframe className="carousel-slide embed-responsive embed-responsive-4by3" width="287" height="315"
    // src={props.src}>
    // </iframe>
    <iframe width="287" height="315"
      src={props.src}
      srcdoc={code}
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

  );
}

export default Card;
