import React, { PropTypes } from 'react';

const Loading = ({ visible }) => (
  <div>
    { visible ? 'Loading...' : ''}
  </div>
)

Loading.propTypes = {
  visible: PropTypes.bool.isRequired
}

export default Loading;
