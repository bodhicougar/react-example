var React = require('react');
var ReactDom = require('react-dom');
var Formio = require('jsx!react-formio/src/Formio');

var form = require('./complex.json');

var outputChange = function(data) {
  console.log(data);
}

var formSubmit = function(submission) {
  console.log('submit');
  console.log(submission);
}

ReactDom.render(
  <Formio form={form} onChange={outputChange} onFormSubmit={formSubmit}></Formio>, document.getElementById('formio')
);
