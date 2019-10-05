import React from 'react';
import PropTypes from 'prop-types';

class ShowServerConfig extends  React.Component {

  render() {
    return (
      <>
        <span>Server</span>
      </>
    );
  }
} 

ShowServerConfig.propTypes = {
  config: PropTypes.shape({
    minConnections: PropTypes.bool,
    maxConnections: PropTypes.bool,
    restartAlways: PropTypes.bool
  }),  
  environment: PropTypes.oneOf(['dev', 'play', 'live']).isRequired,
  ssl: function(props, propName, componentName) {
    if (props.environment === 'live' && !props.ssl) {
      return new Error(
        'ssl is required'
      );
    }
    return null;
  }
}

class Ejercicio16 extends React.Component {

    config = {
      
    }

    render() {
      return (
        <>
          <h1 className="ejercicio">16. PropTypes</h1>
          <ShowServerConfig />
        </>
      );
    }
} 

export default Ejercicio16;
