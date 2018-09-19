import React, { Component}  from 'react';
import PropTypes from 'prop-types';
export class SayHello extends Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string
  };
  render() {
    const {firstName, lastName} = this.props
    return (
      <div>
        Hello {firstName} {lastName}!
      </div>
    )
  }
}
