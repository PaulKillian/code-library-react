import React, { lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Card = lazy(() => import('./card'));
const renderLoader = () => <p>...Loading</p>;

export default class VideoCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURLS1: [],
      videoURLS2: [],
      videoURLS3: [],
      videoURLS4: [],
      // videoURLS5: [],
      carousel: 0,
      clickId: '',
      videoIds: []
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
  //       let url = []
  //       for (let i = 0; i < videos.items.length; i++) {
  //         // ids.push(`https://www.youtube.com/embed/${videos.items[i].id.videoId}`)
  //         url.push(videos.items[i].id.videoId)
  //         }
  //       this.setState({ videoId: url });
  //       console.log("videoId", url)
  //     });
  // }

  updateCarouselState(event) {
    if (this.state.carousel === -4 || this.state.carousel === 4) {
      this.setState(previousState => {
        let reset = previousState.carousel;
        reset = 0;
        return {
          carousel: reset,
          id: newId
        };
      });
    }
    const newId = event.target.id;
    if (newId === 'left') {
      this.setState(previousState => {
        let reset = previousState.carousel;
        reset -= 1;
        return {
          carousel: reset,
          clickId: newId
        };
      });
    } else {
      this.setState(previousState => {
        let reset = previousState.carousel;
        reset += 1;
        return {
          carousel: reset,
          clickId: newId
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
        console.log(urls)
        const newUrls = []
        const vidIds = []
        let placeholder = []
        for (let i = 0; i < urls.length; i++) {
          placeholder.push({
            url: urls[i].URL,
            id: urls[i].videoId
          })
          // vidIds.push(urls[i].videoId)
          if (placeholder.length === 4) {
            newUrls.push(placeholder)
            placeholder = []
          }
        }
        this.setState({
          videoURLS1: newUrls[0],
          videoURLS2: newUrls[1],
          videoURLS3: newUrls[2],
          videoURLS4: newUrls[3],
          videoURLS5: newUrls[4]
        });
        })
  }

  render() {
    console.log(this.state.videoURLS1)
    const carouselPositionLeft = `carousel-left${this.state.carousel}`;
    const carouselSlidePositionLeft = `slide-left${this.state.carousel}`;
    const carouselPositionRight = `carousel-right-${this.state.carousel}`;
    const carouselSlidePositionRight = `slide-right-${this.state.carousel}`;
    if (this.state.id === '' || this.state.carousel === -4 || this.state.carousel === 4 || this.state.carousel === 0) {
      return (
        <div>
          <button id="left" onClick={this.updateCarouselState}>click</button>
          <button id="right" onClick={this.updateCarouselState}>click</button>
          <main id="carousel" className="mx-3 my-5 slide-left-0">
            <div className="d-flex justify-content-around">
              {this.state.videoURLS1.map(video => {
                return (
                  <Suspense fallback={renderLoader()}>
                    <Card src={video.URL}
                      id={video.id}
                      key={video.URL}
                    />
                  </Suspense>
                );
              })}
            </div>
          </main>
        </div>
      );
    } else if (this.state.carousel === -1 || this.state.carousel === 3) {
      return (
        <div>
          <button id="left" onClick={this.updateCarouselState}>click</button>
          <button id="right" onClick={this.updateCarouselState}>click</button>
          <div id="carousel" className={`glass mx-3 my-5 slide-left-0`}>
            {this.state.videoURLS2.map(video => {
              return (
                <Suspense fallback={renderLoader()}>
                  <Card src={video.URL}
                    id={video.id}
                    key={video.URL}
                    />
                </Suspense>
              );
            })}
          </div>
        </div>
      );
    } else if (this.state.carousel === -2) {
      return (
          <div>
          <button id="left" onClick={this.updateCarouselState}>click</button>
          <button id="right" onClick={this.updateCarouselState}>click</button>
          <div id="carousel" className={`glass mx-3 my-5 slide-left-0`}>
            {this.state.videoURLS3.map(video => {
              return (
                <Suspense fallback={renderLoader()}>
                  <Card src={video.URL}
                    id={video.id}
                    key={video.URL}
                    />
                </Suspense>
              );
            })}
          </div>
        </div>
      );
    } else if (this.state.carousel === 2) {
      return (
        <div>
          <button id="left" onClick={this.updateCarouselState}>click</button>
          <button id="right" onClick={this.updateCarouselState}>click</button>
          <div id="carousel" className={`glass mx-3 my-5 slide-right-0`}>
            {this.state.videoURLS3.map(video => {
              return (
                <Suspense fallback={renderLoader()}>
                  <Card src={video.URL}
                    id={video.id}
                    key={video.URL}
                  />
                </Suspense>
              );
            })}
          </div>
        </div>
      );
    } else if (this.state.carousel === -3 || this.state.carousel === 1) {
      return (
        <div>
          <button id="left" onClick={this.updateCarouselState}>click</button>
          <button id="right" onClick={this.updateCarouselState}>click</button>
          <div id="carousel" className={`glass mx-3 my-5`}>
            {this.state.videoURLS4.map(video => {
              return (
                <Suspense fallback={renderLoader()}>
                  <Card src={video.URL}
                    id={video.id}
                    key={video.URL}
                  />
                </Suspense>
              );
            })}
          </div>
        </div>
      );
    }
  }
}
