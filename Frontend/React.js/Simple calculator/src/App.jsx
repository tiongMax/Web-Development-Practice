import { useReducer } from 'react'
import './style.css'
import DigitButton from './DigitButton'

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${currentOperand || ""}${payload.digit}`
      }
  }
}


export default function App() {
  const [{ previousOperand, currentOperand, operation }, dispatch] = useReducer(reducer, {})  

  return (
    <>
      <div className='calculator-grid'>
        <div className='output'>
          <div className='previous-operand'>{previousOperand} {operation}</div>
          <div className='current-operand'>{currentOperand}</div>
        </div>
        <button className='span-two'>AC</button>
        <button>DEL</button>
        <button>/</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <DigitButton digit="0" dispatch={dispatch} />
        <button className='span-two'>=</button>
      </div>
    </>
  )
}
