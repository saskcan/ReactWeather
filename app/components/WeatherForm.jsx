var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render: function () {
    return(
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" placeholder="Enter City Name" ref="location"/>
          </div>
          <div>
            <button type="submit">Get Weather</button>
          </div>
        </form>
    );
  }
});

module.exports = WeatherForm;
