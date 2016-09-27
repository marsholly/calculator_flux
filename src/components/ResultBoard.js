import React, { Component } from 'react';

export default class ResultBoard extends Component {
  render() {
    let { operand, operation, result } = this.props;
    let showInfo;
    if (!result.length) {
      showInfo = `${operand}  ${operation}`;
    } else {
      showInfo = result;
    }
    return (
      <div className="resultBoard">
        <h3 className="showResult">
          { showInfo }
        </h3>
      </div>
    )
  }
};
