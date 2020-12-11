import React from 'react';

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
    this.setState({
      term: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="video-search">Video Search</label>
          <input onChange={this.handleChange} name='video-search'
            type='text' value={this.state.term}></input>
        </div>
      </form>
    );
  }
}

export default Search;
