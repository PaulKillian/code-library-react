import React from 'react';
import VideoCards from './video-cards'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: 'default text',
      videoURLS: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.values)
    this.setState({
      term: event.target.value
    });
  }

  handleSubmit(event) {
    const cards = document.getElementById('cards')
    cards.classList.add('slide-out')
    event.preventDefault();
    const subject = this.state.term
    fetch(`/api/add-video/${subject}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(urls => {
        console.log(urls)
        this.setState({
          videoURLS: urls
        })
      });
    this.props.pass(this.state.videoURLS)
    this.props.setView(subject)
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="flex justify-content-column">
          <label htmlFor="video-search">Video Search</label>
          <input onChange={this.handleChange} name='video-search'
            type='text' value={this.state.term}></input>
          <button type="submit">click</button>
        </div>
      </form>
    );
  }
}

export default Search;
