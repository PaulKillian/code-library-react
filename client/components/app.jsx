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
      videosURLS: [],
      subject: 'javascript'
    };
    this.passVideoURLS = this.passVideoURLS.bind(this)
    this.setView = this.setView.bind(this)
  }

  passVideoURLS(urls) {
    this.setState({ videoURLS: urls })
  }

  setView(subject) {
    this.setState({ subject: 'javascript'})
  }

  render() {
    if (this.state.subject === 'javascript') {
      return (
        <>
          <Landing />
          <Search pass={this.passVideoURLS} setView={this.setView}/>
          <VideoCards urls={this.state.videosURLS} />
          <Search />
          <BookCards />
          <Search />
          <ArticleCards />
          <Search />
          <AlgoCards />
        </>
      );
    } else {
      return (
        <>
          <Landing />
          <Search pass={this.passVideoURLS} />
          <VideoCards urls={this.state.videosURLS} />
          <Search />
          <BookCards />
          <Search />
          <ArticleCards />
          <Search />
          <AlgoCards />
        </>
      );
    }
  }
}
