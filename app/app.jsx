var React = require('react');
var ReactDOM = require('react-dom');
var {hashHistory, IndexRoute, Route, Router} = require('react-router');

var About = require('About');
var Examples = require('Examples');
var Main = require('Main');
var Weather = require('Weather');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather}/>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
