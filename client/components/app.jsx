import React from 'react';
import Landing from './landing';
import Button from './button';
import GetVideos from './get-videos';
import Search from './search';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
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

  handleVideoSelect(video) {
    this.setState({ selectedVideo: video });
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <>
        <Landing />
        <Button />
        <GetVideos />
        <Search />
      </>
    );
  }
}
