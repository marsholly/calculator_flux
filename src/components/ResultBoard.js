import React, { Component } from 'react';

export default class ResultBoard extends Component {
  render() {
    let { operand, operation } = this.props;
    let firstOperand = `${operand}  ${operation}`;
    return (
      <div className="resultBoard">
        <h3 className="showResult">
          { firstOperand }
        </h3>
      </div>
    )
  }
};
