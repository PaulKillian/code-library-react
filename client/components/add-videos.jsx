import React from 'react';
import Cards from './cards'

export default class AddVideos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  componentDidMount() {
    this.GetVideos
  }

  render() {
    return (
      <iframe width="420" height="315"
        src={this.state.videos}>
      </iframe>
    );
  }
}
