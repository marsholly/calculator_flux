import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';

let _operand = '';
let _operation = '';
let _otherOperand = ''

class CalculatorStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register( action => {
      switch (action.type) {
        case 'CREATE_OPERAND':
          let { number } = action.payload;
          if (number === '+/-'){
            if (_operand[0] !== '-') {
              _operand = '-'+ _operand;
            } else {
              _operand = _operand.slice(1,_operand.length);
            }
          }else {
            _operand += number;
          }
          this.emit('CHANGE');
          break;
        case 'CLEAR_ALL':
          _operand = '';
          _operation = '';
          _otherOperand = '';
          this.emit('CHANGE');
          break;
        case 'CREATE_COMMAND':
          let { command } = action.payload;
          _operation = command;
          _otherOperand = _operand;
          _operand = ''
          this.emit('CHANGE');
          break;
      }
    })
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAllNumbers() {
    return _operand;
  }

  getOperation() {
    return _operation;
  }
}

export default new CalculatorStore();
