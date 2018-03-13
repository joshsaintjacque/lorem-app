import React, { Component } from 'react';
import { number, func } from 'prop-types';

class NumberField extends Component {
  static propTypes = {
    value: number.isRequired,
    onChange: func.isRequired
  }

  state = {
    value: this.props.value
  }

  onChange(e) {
    this.setState({ value: e.target.value },
      () => this.props.onChange(this.state.value));
  }

  render() {
    return(
      <div className="number">
        <input
          type="number"
          className="form-control"
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
      </div>
    )
  }
}

export default NumberField;