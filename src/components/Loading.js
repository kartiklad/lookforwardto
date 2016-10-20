import React, { PropTypes, Component } from 'react';

export default class Loading extends Component {
  constructor(props) {
    super(props);

    this.styles = {
      show: {
        display: 'block'
      },
      hide: {
        display: 'none'
      }
    };
  }

  render() {

    return (
      <div>
        <span style={this.props.show ? this.styles.show : this.styles.hide}>
          Looking for movies...
        </span>
      </div>
    );
  }
}

Loading.propTypes = {
  show: PropTypes.bool.isRequired,
};
