import React, { Component } from 'react';
import { string, object, func, arrayOf } from 'prop-types';

class Select extends Component {
  static propTypes = {
    value: string.isRequired,
    options: arrayOf(object).isRequired,
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
      <div className="select">
        <select className="form-control" onChange={this.onChange.bind(this)}>
          {this.props.options.map((option, index) =>
            <option
              key={index}
              value={option.value}
            >
              {option.text}
            </option>)}
        </select>
      </div>
    )
  }
}

export default Select;