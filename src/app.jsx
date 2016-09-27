var React = require('react');
var ReactDOM = require('react-dom');
var {Formio, FormioGrid} = require('react-formio');
var Formiojs = require('formiojs');

require('react-widgets/dist/css/react-widgets.css');
require('react-formio/formio.css');

// Add a custom component
//FormioComponents.checkio = require('./checkio.jsx');

var form = require('./forms/complex.json');

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

//Formiojs.setBaseUrl('http://api.lvh.me:3000');
//<Formio src=https://nuvarpfhvrxjvwm.form.io/user/registration onFormSubmit={onSubmit} />, document.getElementById('formio')
//<FormioGrid src="https://nuvarpfhvrxjvwm.form.io/user" onButtonClick={onRow} />, document.getElementById('formio')
var onRow = function(type, id) {
  console.log(type, id);
}

const constants = {
  FORM_SRC: "https://nuvarpfhvrxjvwm.form.io/user/info"
};
var Wrapper = React.createClass({
  displayName: 'Wrapper',
  getInitialState: function() {
    return {
      submission: {
        data: {
          textField: 'test'
        }
      }
    }
  },
  componentDidMount: function() {
    setTimeout(function() {
      this.setState({
        submission: {
          data: {
            textField: 'updated'
          }
        }
      })
    }.bind(this), 3000);
  },
  render: function() {
    return (
      <Formio src="https://examples.form.io/components" onChange={formChange} />
    );
  }
});

ReactDOM.render(
  <Formio src="https://examples.form.io/components" onChange={formChange} />, document.getElementById('formio')
);
