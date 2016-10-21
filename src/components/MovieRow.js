import React, { PropTypes, Component } from 'react';

class MovieRow extends Component {
  constructor(props) {
    super(props);
    this.styles = {
      row: {
        borderBottom: '1px solid #000',
        marginTop: 20,
        width: 500,
        minHeight: 120,
        clear: 'both'
      },
      poster: {
        float: 'left',
        width: 100,
        height: 100,
        marginRight: 10,
        border: '1px solid #000'
      },
      info: {
        minHeight: 120
      },
      heading: {
        fontWeight: 600
      },
      show: {
        display: 'block'
      },
      hide: {
        display: 'none'
      }
    }
  }

  addToRemind() {
    let movie;
    try {
      movie = JSON.parse(this.refs.movie.value);
    } catch (e) {
      throw new Error('Couldn\'t read movie');
    }

    this.props.saveMovie(movie);
  }

  render() {
    let poster;
    if (this.props.movie.Poster && this.props.movie.Poster !== 'N/A') {
      poster = <img
        style={this.styles.poster}
        src={this.props.movie.Poster}
      />;
    } else {
      poster = <div style={this.styles.poster}>&nbsp;</div>;
    }
    return (
      <div style={this.styles.row}>
        {poster}
        <div style={this.styles.info}>
          <span style={this.styles.heading}>Title: </span>{this.props.movie.Title} <br />
          <span style={this.styles.heading}>Released: </span>{this.props.movie.Released} <br />
          <span style={this.styles.heading}>Plot: </span>{this.props.movie.Plot}
        </div>
        <input type="hidden" ref="movie" value={JSON.stringify(this.props.movie)} />
        <input style={this.props.isSaved ? this.styles.hide : this.styles.show} type="button" value="Remind me" onClick={this.addToRemind.bind(this)} />
      </div>
    );
  }
};

MovieRow.propTypes = {
  movie: PropTypes.object.isRequired,
  isSaved: PropTypes.bool.isRequired,
  saveMovie: PropTypes.func
}

export default MovieRow;
