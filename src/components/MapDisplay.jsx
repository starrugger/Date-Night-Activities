import React from 'react';
import PropTypes from 'prop-types';

function MapDisplay(props) {
  const { value } = props;

  // seting up hook
  // const [currentValue, replacementValue] = useState(value);

  return (
    <iframe title="google-map" className="map" src={value} />
  );
}

MapDisplay.propTypes = {
  value: PropTypes.string.isRequired,
};

export default MapDisplay;
