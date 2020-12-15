import React, { lazy, Suspense } from 'react';
import Landing from './landing';
import Button from './button';
import Search from './search';
const VideoCards = lazy(() => import('./video-cards'));
const renderLoader = () => <p>...Loading</p>;
import BookCards from './book-cards';
import ArticleCards from './article-cards';
import AlgoCards from './algo-cards'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videosURLS: [],
      subject: ''
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
          <Search pass={this.passVideoURLS} setView={this.setView} />
          <Suspense fallback={renderLoader()}>
            <VideoCards urls={this.state.videosURLS} subject={this.state.subject} />
          </Suspense>
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
          <Search pass={this.passVideoURLS} setView={this.setView} />
          <Suspense fallback={renderLoader()}>
            <VideoCards urls={this.state.videosURLS} subject={this.state.subject} />
          </Suspense>
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
