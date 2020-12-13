import React from 'react';
import FullAlgos from './full-algos'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: 'default text'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      term: event.target.value
    });
  }

  handleSubmit(event) {
    const cards = document.getElementById('cards')
    // cards.classList.remove('slide')
    cards.classList.add('slide-out')
    event.preventDefault();
    // this.props.handleFormSubmit(this.state.term);
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
