import AppDispatcher from '../AppDispatcher';

const CalculatorActions = {
  createOperand(number) {
    AppDispatcher.dispatch({
      type: 'CREATE_OPERAND',
      payload: { number }
    })
  },
  clearAll() {
    AppDispatcher.dispatch({
      type:'CLEAR_ALL'
    })
  },
  createCommand(command) {
    AppDispatcher.dispatch({
      type:'CREATE_COMMAND',
      payload: { command }
    })
  },
  getResult() {
    AppDispatcher.dispatch({
      type: 'GET_RESULT'
    })
  }

}

export default CalculatorActions;
