import React, { PropTypes, Component } from 'react';

class FindMovieForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {
    this.props.onUserSubmit(this.refs.searchText.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref="searchText"
          placeholder="Search..."
        />
        <input type="button" value="Submit" onClick={this.handleSubmit.bind(this)} />
      </div>
    )
  }
}

FindMovieForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  onUserSubmit: PropTypes.func.isRequired
};

export default FindMovieForm;
