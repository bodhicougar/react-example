var React = require('react');
var ReactDOM = require('react-dom');
var Formio = require('react-formio/src/Formio.jsx');

var form = require('./complex.json');
var submission = {
  data: {
    textField: 'My Value',
    number: 300
  }
};

var formChange = function(submission) {
  console.log('change', submission);
}

var formSubmit = function(submission) {
  console.log('submit', submission);
}

var onElementRender = function(component, element) {
  if (submission.data.hasOwnProperty(component.props.component.key) && submission.data[component.props.component.key].toString() !== component.state.value.toString()) {
    return (
      <div>
        {element}
        <div style={{color: 'red'}}>Original Value: {submission.data[component.props.component.key]}</div>
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
}

ReactDOM.render(
  <Formio src="https://examples.form.io/components" submission={submission} onChange={formChange} onFormSubmit={formSubmit} onElementRender={onElementRender}></Formio>, document.getElementById('formio')
);
