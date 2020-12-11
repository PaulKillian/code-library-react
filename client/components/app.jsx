import React from 'react';
import Landing from './landing';
import Button from './button';
import AddVideos from './add-videos';
import Search from './search';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.getVideos = this.getVideos.bind(this)
  }

  // handleSubmit(termFromSearchBar) {
  //   const response = youtube.get('/search', {
  //     params: {
  //       q: termFromSearchBar
  //     }
  //   });
  //   this.setState({
  //     videos: response.data.items
  //   });
  // }

  getVideos(video) {
      fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=surfing&maxResults=25&q=surfing&key=AIzaSyA--QcXTr0h8r80hjzA4S8e5Ot2C11bIAY', {
        headers: {
          Accept: 'application/json'
        },
        body: JSON.stringify()
      })
        .then(res => res.json())
        .then(videos => {
          const vid1 = videos.items[0].id.videoId;
          const youLink = `https://www.youtube.com/embed/${vid1}`
          this.setState({ videos: youLink });
        });
    }

  render() {
    return (
      <>
        <Landing />
        <Button />
        <AddVideos videos={this.state.videos}/>
        <Search />
      </>
    );
  }
}
