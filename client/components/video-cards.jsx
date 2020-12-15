import React, { lazy, Suspense } from 'react';
const Card = lazy(() => import('./card'));
const Search = lazy(() => import('./search'));
const renderLoader = () => <p>...Loading</p>;

export default class VideoCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURLS: [],
      selectedVideo: null
    };
  }



  // componentDidMount() {
  //   fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=css&maxResults=9&q=css&key=AIzaSyA--QcXTr0h8r80hjzA4S8e5Ot2C11bIAY', {
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
  //       this.setState({ videos: ids });
  //       console.log(this.state.video)
  //     });

  // }

  componentDidMount() {
    fetch(`/api/add-video/css`, {
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
    console.log(this.state.videoURLS)
    return (
      <Suspense fallback={renderLoader()}>
        <div className="container-fluid">
          <div className="flex justif-content-around">
            <div className="contain container-fluid mt-4 ml-5">
              {this.state.videoURLS.map(video => {
                return (
                  <Card src={video.URL} />
                );
              })}
            </div>
          </div>
        </div>
      </Suspense>
    );
  }
}
