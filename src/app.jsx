var React = require('react');
var ReactDOM = require('react-dom');
var Formio = require('react-formio/src/Formio.jsx');

var form = require('./complex.json');

var formChange = function(submission) {
  console.log('change', submission);
}

var formSubmit = function(submission) {
  console.log('submit', submission);
}

ReactDOM.render(
  <Formio src="https://examples.form.io/components" onChange={formChange} onFormSubmit={formSubmit}></Formio>, document.getElementById('formio')
);
