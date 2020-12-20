import React, { lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Card = lazy(() => import('./card'));
const renderLoader = () => <p>...Loading</p>;

export default class VideoCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURLS: [],
      carousel: 0,
      id: ''
    };
    this.updateCarouselState = this.updateCarouselState.bind(this);
  }

  // componentDidMount() {
  //   fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=reactjs&maxResults=25&q=reactjs&key=AIzaSyA--QcXTr0h8r80hjzA4S8e5Ot2C11bIAY', {
  //     headers: {
  //       Accept: 'application/json'
  //     },
  //     body: JSON.stringify()
  //   })
  //     .then(res => res.json())
  //     .then(videos => {
  //       let ids = []
  //       for (let i = 0; i < videos.items.length; i++) {
  //         ids.push(`https://www.youtube.com/embed/${videos.items[i].id.videoId}`)
  //         }
  //       this.setState({ videoURLS: ids });
  //     });
  // }

  updateCarouselState(event) {
    const newId = event.target.id;
    if (this.state.carousel > -6 && newId === 'left') {
      this.setState(previousState => {
        let reset = previousState.carousel;
        reset -= 1;
        return {
          carousel: reset,
          id: newId
        };
      });
    } else if (this.state.carousel === 6 && newId === 'right') {
      this.setState(previousState => {
        let reset = previousState.carousel;
        reset = 1;
        return { carousel: reset };
      });
    } else if (this.state.carousel === -6 && newId === 'right') {
      this.setState(previousState => {
        let reset = previousState.carousel;
        reset += 1;
        return { carousel: reset };
      });
    } else if (this.state.carousel === -6) {
      this.setState(previousState => {
        let reset = previousState.carousel;
        reset = -1;
        return { carousel: reset };
      });
    } else if (this.state.carousel === -5 && event.target.id === 'left') {
      this.setState(previousState => {
        let backToTheLeft = previousState.carousel;
        backToTheLeft = -1;
        return {
          carousel: backToTheLeft,
          id: newId
        };
      });
    } else if (this.state.carousel < 6 && event.target.id === 'right') {
      this.setState(previousState => {
        let backToTheRight = previousState.carousel;
        backToTheRight += 1;
        return {
          carousel: backToTheRight,
          id: newId
        };
      });
    }
  }

  componentDidMount() {
    fetch('/api/add-video/reactjs', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(urls => {
        this.setState({
          videoURLS: urls
        });
      });
  }

  render() {
    const carouselPositionLeft = `carousel-left${this.state.carousel}`;
    const carouselSlidePositionLeft = `slide-left${this.state.carousel}`;
    const carouselPositionRight = `carousel-right-${this.state.carousel}`;
    const carouselSlidePositionRight = `slide-right-${this.state.carousel}`;
    if (this.state.id === '' || this.state.carousel === 6 || this.state.carousel === -6) {
      return (
        <Suspense fallback={renderLoader()}>
          <button id="left" onClick={this.updateCarouselState}>click</button>
          <button id="right" onClick={this.updateCarouselState}>click</button>
          <div id="carousel" className="flex">
            {this.state.videoURLS.map(video => {
              return (
                <Card src={video.URL}
                  key={video.URL}
                />
              );
            })}
          </div>
        </Suspense>
      );
    } else if (this.state.carousel <= 0 && this.state.id === 'left') {
      return (
        <Suspense fallback={renderLoader()}>
          <button id="left" onClick={this.updateCarouselState}>click</button>
          <button id="right" onClick={this.updateCarouselState}>click</button>
          <div id="carousel" className={`flex ${carouselPositionLeft} ${carouselSlidePositionLeft}`}>
            {this.state.videoURLS.map(video => {
              return (
                <Card src={video.URL}
                  key={video.URL}
                />
              );
            })}
          </div>
        </Suspense>
      );
    } else if (this.state.carousel <= 0 && this.state.id === 'right') {
      return (
        <Suspense fallback={renderLoader()}>
          <button id="left" onClick={this.updateCarouselState}>click</button>
          <button id="right" onClick={this.updateCarouselState}>click</button>
          <div id="carousel" className={`flex ${carouselPositionLeft}`}>
            {this.state.videoURLS.map(video => {
              return (
                <Card src={video.URL}
                  key={video.URL}
                />
              );
            })}
          </div>
        </Suspense>
      );
    } else if (this.state.carousel >= 0 && this.state.id === 'left') {
      return (
        <Suspense fallback={renderLoader()}>
          <button id="left" onClick={this.updateCarouselState}>click</button>
          <button id="right" onClick={this.updateCarouselState}>click</button>
          <div id="carousel" className={`flex ${carouselPositionRight}`}>
            {this.state.videoURLS.map(video => {
              return (
                <Card src={video.URL}
                  key={video.URL}
                />
              );
            })}
          </div>
        </Suspense>
      );
    } else if (this.state.carousel >= 0 && this.state.id === 'right') {
      return (
        <Suspense fallback={renderLoader()}>
          <button id="left" onClick={this.updateCarouselState}>click</button>
          <button id="right" onClick={this.updateCarouselState}>click</button>
          <div id="carousel" className={`flex ${carouselPositionRight} ${carouselSlidePositionRight}`}>
            {this.state.videoURLS.map(video => {
              return (
                <Card src={video.URL}
                  key={video.URL}
                />
              );
            })}
          </div>
        </Suspense>
      );
    }
  }
}
