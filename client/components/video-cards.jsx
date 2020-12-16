import React, { lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
const Card = lazy(() => import('./card'));
const renderLoader = () => <p>...Loading</p>;

export default class VideoCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURLS: [],
      carousel: 0,
      click: ''
    };
    this.carouselLeft = this.carouselLeft.bind(this);
    this.carouselRight = this.carouselRight.bind(this);
    this.updateCarouselState = this.updateCarouselState.bind(this)
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
    if (this.state.carousel === -4) {
      this.setState((previousState) => {
        let c = previousState.carousel
        c += 4
        console.log(c)
        return { carousel: c }
      })
    } else if (this.state.carousel === 4) {
      this.setState((previousState) => {
        let c = previousState.carousel
        c -= 4
        console.log(c)
        return { carousel: c }
      })
    } else if (event.target.id === 'left') {
      this.setState((previousState) => {
        let c = previousState.carousel
        c -= 1
        console.log(c)
        return { carousel: c }
      })
    } else {
      console.log('insideRight')
      this.setState((previousState) => {
        let c = previousState.carousel
        c += 1
        console.log(c)
        return { carousel: c }
      })
    }
    (event.target.id === 'left') ? this.carouselLeft() : this.carouselRight()
  }

  carouselLeft() {
    const carousel = document.getElementById('carousel');
    if (this.state.carousel === 1) {
      carousel.className = `flex`;
    } else if (this.state.carousel >= 0) {
      const carouselPosition = `carousel-left-${this.state.carousel}`;
      const carouselSlidePosition = `slide-${this.state.carousel}`;
      carousel.className = `flex ${carouselSlidePosition}`;
      carousel.classList.remove(`${carouselPosition}`);
      setTimeout(function () { carousel.classList.add(`${carouselPosition}`); }, 200);
    } else {
      const carouselPosition = `carousel-left${this.state.carousel}`;
      const carouselSlidePosition = `slide${this.state.carousel}`;
      carousel.className = `flex ${carouselSlidePosition}`;
      carousel.classList.remove(`${carouselPosition}`);
      setTimeout(function () { carousel.classList.add(`${carouselPosition}`); }, 200);
    }
  }

  carouselRight() {
    const carousel = document.getElementById('carousel');
    if (this.state.carousel === -1) {
      carousel.className = `flex`;
    } else if (this.state.carousel >= 0) {
      const carouselPosition = `carousel-right-${this.state.carousel}`;
      const carouselSlidePosition = `slide-${this.state.carousel}`;
      carousel.className = `flex ${carouselSlidePosition}`;
      carousel.classList.remove(`${carouselPosition}`);
      setTimeout(function () { carousel.classList.add(`${carouselPosition}`); }, 200);
    } else {
      const carouselPosition = `carousel-right${this.state.carousel}`;
      const carouselSlidePosition = `slide${this.state.carousel}`;
      carousel.className = `flex ${carouselSlidePosition}`;
      carousel.classList.remove(`${carouselPosition}`);
      setTimeout(function () { carousel.classList.add(`${carouselPosition}`); }, 200);
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
    return (
      <Suspense fallback={renderLoader()}>
        <button id="left" onClick={this.updateCarouselState}>click</button>
        <button id="right" onClick={this.updateCarouselState}>click</button>
        <div id="carousel" className="flex">
          {this.state.videoURLS.map(video => {
            return (
              <Card src={video.URL} />
            );
          })}
        </div>
      </Suspense>
    );
  }
}
