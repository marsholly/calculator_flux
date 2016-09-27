import React, { Component } from 'react';
import CalculatorActions from '../actions/CalculatorActions';


export default class OperationBoard extends Component {
  constructor(props) {
    super(props);

    this.renderButtons = this.renderButtons.bind(this);
    this.submitCommand = this.submitCommand.bind(this);
    this.submitClearCommand = this.submitClearCommand.bind(this);
    this.submitNumber = this.submitNumber.bind(this);
  }

  submitCommand(event) {
    let command = event.target.value;
    CalculatorActions.createCommand(command);
  }

  submitClearCommand(event) {
    let clearCommand = event.target.value;
    CalculatorActions.clearAll();
  }

  submitNumber(event) {
    let number = event.target.value;
    CalculatorActions.createOperand(number);
  }

  submitResult(event) {
    CalculatorActions.getResult();
  }

  renderButtons() {
    let elementArray = ['AC','+/-','%','÷','7','8','9','x','4','5','6','-','1','2','3','+','0','.','='];
    return elementArray.map((number, index) => {
      switch (number) {
        case '÷':
        case 'x':
        case '-':
        case '+':
          return (
            <span key={index}>
              <button className="btn btn-md btn-warning operationBtn" value={number} onClick={this.submitCommand} >{number}</button>
            </span>
          );
          break;
        case '=':
          return (
            <span key={index}>
              <button className="btn btn-md btn-warning operationBtn" value={number} onClick={this.submitResult} >{number}</button>
            </span>
          )
        case '0':
          return (
              <span key={index}>
                <button className="btn btn-md btn-info zeroBtn" value={number} onClick={this.submitNumber} >{number}</button>
              </span>
          );
          break;
        case 'AC':
          return (
            <span key={index}>
              <button className="btn btn-md btn-info operationBtn" value={number} onClick={this.submitClearCommand} >{number}</button>
            </span>
          )
          break;
        case '%':
          return (
            <span key={index}>
              <button className="btn btn-md btn-info operationBtn" value={number} onClick={this.submitCommand} >{number}</button>
            </span>
          )
          break;
        default:
          return (
            <span key={index}>
              <button className="btn btn-md btn-info operationBtn" value={number} onClick={this.submitNumber} >{number}</button>
            </span>
          )
      }
    });
  }
  render() {
    return (
      <div className="operationBoard">
        {this.renderButtons()}
      </div>
    )
  }
};
