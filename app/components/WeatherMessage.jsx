var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return(
      <h2>It's {temp} in {location}</h2>
  );
};

module.exports = WeatherMessage;
