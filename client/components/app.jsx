import React from 'react';
import Landing from './landing';
import Button from './button';
import Search from './search';
import VideoCards from './video-cards';
import BookCards from './book-cards';
import ArticleCards from './article-cards';
import AlgoCards from './algo-cards'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }


  render() {
    return (
      <>
        <Landing />
        <VideoCards />
        <BookCards />
        <ArticleCards />
        <AlgoCards />
      </>
    );
  }
}
