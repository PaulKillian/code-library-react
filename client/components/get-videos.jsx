import React from 'react';

export default class GetVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  componentDidMount() {
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyA--QcXTr0h8r80hjzA4S8e5Ot2C11bIAY', {
      headers: {
        Accept: 'application/json'
      },
      body: JSON.stringify()
    })
      .then(res => res.json())
      .then(videos => {
        const vid1 = videos.items[0].snippet.thumbnails.default.url;
        this.setState({ videos: vid1 });
      });
  }

  render() {
    return (
      <img src={this.state.videos}></img>
    );
  }
}
