import React, { lazy, Suspense } from 'react';
const Card = lazy(() => import('./card'));
const renderLoader = () => <p>...Loading</p>;
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

export default class VideoCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURLS: [],
      selectedVideo: null
    };
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

  componentDidMount() {
    fetch(`/api/add-video/reactjs`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(urls => {
        this.setState({
          videoURLS: urls
        })
      });
  }


  render() {
    return (
      <div class="carousel-wrapper">
        <div class="carousel">
          <img class="carousel-iframe initial" src="./images/code8.gif"></img>
          <Suspense fallback={renderLoader()}>
              {this.state.videoURLS.map(video => {
                return (
                  <Card src={video.URL} />
                );
              })}
          </Suspense>
          <div class="carousel-button-next"></div>
          <div class="carousel-button-prev"></div>
        </div>
      </div>
    );
  }
}
