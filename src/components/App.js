import React, { Component } from 'react';
import CalculatorStore from '../stores/CalculatorStore';
import ResultBoard from './ResultBoard';
import OperationBoard from './OperationBoard';
import '../css/style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operand: '',
      operation: '',
      result:''
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    CalculatorStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    CalculatorStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      operand: CalculatorStore.getAllNumbers(),
      operation: CalculatorStore.getOperation(),
      result: CalculatorStore.getResult()
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Calculator</h1>
        <div className="row">
          <div className="text-center">
            <ResultBoard operand = {this.state.operand} operation={this.state.operation} result = {this.state.result}/>
            <OperationBoard />
          </div>
        </div>
      </div>
    )
  }
};
