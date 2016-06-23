var React = require('react');
var ReactDOM = require('react-dom');
var Formio = require('react-formio/src/Formio.jsx');

var form = require('./complex.json');
var data = {
  textField: 'My Value',
  number: 300
};

var formChange = function(submission) {
  console.log('change', submission.data);
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

ReactDOM.render(
  <Formio src="https://examples.form.io/components" submission={{data: data }} onChange={formChange} onFormSubmit={formSubmit} onElementRender={onElementRender}></Formio>, document.getElementById('formio')
);
