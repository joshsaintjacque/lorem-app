import React, { Component } from 'react';
import { string, array, oneOfType } from 'prop-types';

class Lorem extends Component {
  static propTypes = {
    value: oneOfType([string, array])
  }

  static isValueArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
  }

  state = {
    value: this.props.value
  }

  render() {
    const { value } = this.props;
    return(
      <div className="lorem card bg-secondary mb-3">
        <h4 className="card-header card-title">Your Placeholder Text</h4>
        <div className="card-body">
          <p className="card-text">
            {Lorem.isValueArray(value) ? JSON.stringify(value, null, 2) : value}
          </p>
        </div>
      </div>
    )
  }
}

export default Lorem;