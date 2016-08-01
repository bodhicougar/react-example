var React = require('react');
var ReactDOM = require('react-dom');
var Formio = require('react-formio');

require('react-widgets/dist/css/react-widgets.css');
require('react-formio/formio.css');

// Add a custom component
//FormioComponents.checkio = require('./checkio.jsx');

var form = require('./complex.json');

var data = {
};

var formChange = function(submission, key, value) {
  console.log('change', submission.data, key, value);
}

var formSubmit = function(submission) {
  console.log('submit', submission.data);
}

var onElementRender = function(component, element) {
  if (data.hasOwnProperty(component.props.component.key) && data[component.props.component.key].toString() !== component.state.value.toString()) {
    return (
      <div>
        {element}
        <div style={{color: 'red'}}>Original Value: {data[component.props.component.key]}</div>
      </div>
    );
  }
  else {
    return (
      <div>
        {element}
      </div>
    );
  }
};

// This form has all components
// https://examples.form.io/components

// This form has a custom component
// https://examples.form.io/checkio

// This form has custom conditionals
// https://examples.form.io/customcond

// This form can hide fields based on a hidden component
// https://examples.form.io/hidden
// set the data above to "hidden": "one" or "hidden": "two" to see the different fields.

ReactDOM.render(
  <Formio src="https://examples.form.io/wizard" submission={{data: data }} onChange={formChange} onFormSubmit={formSubmit} onElementRender={onElementRender}></Formio>, document.getElementById('formio')
);
