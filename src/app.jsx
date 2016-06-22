var React = require('react');
var ReactDOM = require('react-dom');
var Formio = require('react-formio/src/Formio.jsx');

var form = require('./complex.json');

var outputChange = function(data) {
  console.log(data);
}

var formSubmit = function(submission) {
  console.log('submit');
  console.log(submission);
}

ReactDOM.render(
  <Formio src="https://examples.form.io/components" onChange={outputChange} onFormSubmit={formSubmit}></Formio>, document.getElementById('formio')
);
