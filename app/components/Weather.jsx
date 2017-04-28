var React = require('react');

var openWeatherMap = require('openWeatherMap');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },

  handleSearch: function(location) {
    debugger;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location)
    .then(temp => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, errorMessage => {
      this.setState({isLoading: false});
      alert(errorMessage);
    });
  },

  render: function () {
    const {isLoading, location, temp} = this.state;

    var renderMessage = () => {
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    };

    return(
        <div>
          <h2>Get Weather</h2>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
        </div>
    );
  }
});

module.exports = Weather;
