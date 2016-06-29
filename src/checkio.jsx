var React = require('react');
var valueMixin = require('react-formio/src/components/mixins/valueMixin.jsx');

/**
 * To use this, create a custom component on a form with the following type of structure. You should modify the values
 * and key to fit your question.
 *
 *
 {
   "type": "checkio",
   "key": "mykey",
   "values": [
     {
       "value": "yes",
       "label": "Yes"
     },
     {
       "value": "no",
       "label": "No"
     }
   ],
   "conditional": {
     "eq": "",
     "when": null,
     "show": null
   },
   "persistent": true,
   "protected": false
 }
 */

module.exports = React.createClass({
  displayName: 'Check Radio',
  mixins: [valueMixin],
  onChangeRadio: function(event) {
    var value = event.currentTarget.id;
    // If they click the currently selected item, unselect
    if (this.state.value !== value) {
      this.setValue(value);
    }
    else {
      this.setValue(null);
    }
  },
  getElements: function(value, index) {
    index = index || 0;
    return (
      <div className="checkio-wrapper">
        {this.props.component.values.map(function(v, id) {
          return (
            <div key={id} className="checkio">
              <label className="control-label">
                <input
                  type="checkbox"
                  id={v.value}
                  data-index={index}
                  name={this.props.component.key}
                  checked={v.value===this.state.value}
                  disabled={this.props.readOnly}
                  onChange={this.onChangeRadio}
                ></input>
                {v.label}
              </label>
            </div>
          );
        }.bind(this))
        }
      </div>
    );
  }
});
