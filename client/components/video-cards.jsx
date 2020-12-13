import React, { lazy, Suspense } from 'react';
const Card = lazy(() => import('./card'));
const Search = lazy(() => import('./search'));
const renderLoader = () => <p>...Loading</p>;

export default class VideoCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  componentDidMount() {
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=css&maxResults=9&q=css&key=AIzaSyA--QcXTr0h8r80hjzA4S8e5Ot2C11bIAY', {
      headers: {
        Accept: 'application/json'
      },
      body: JSON.stringify()
    })
      .then(res => res.json())
      .then(videos => {
        let ids = []
        for (let i = 0; i < videos.items.length; i++) {
          ids.push(`https://www.youtube.com/embed/${videos.items[i].id.videoId}`)
          }
        this.setState({ videos: ids });
      });
  }

  render() {
    console.log(this.state.videos)
    return (
      <Suspense fallback={renderLoader()}>
        <Search />
        <div className="container-fluid">
          <div className="flex justif-content-around">
            <div className="contain container-fluid mt-4 ml-5">
              {this.state.videos.map(video => {
                return (
                  <Card src={video} />
                );
              })}
            </div>
          </div>
        </div>
      </Suspense>
    );
  }
}
