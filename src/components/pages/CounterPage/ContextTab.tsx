import React, { useContext } from 'react'
import { CounterContext } from '../../../hooks/useCounter/CounterProvider';

const ContextTab = () => {
  const { state, dispatch } = useContext(CounterContext)!;

  const plusButtonHandler = (e: React.MouseEvent) => {
		e.preventDefault();
    dispatch({ type: "INCREMENT"})
	};
	
	const minusButtonHandler = (e: React.MouseEvent) => {
		e.preventDefault();
    dispatch({ type: "DECREMENT"})
	};

	const resetButtonHandler = (e: React.MouseEvent) => {
		e.preventDefault();
    dispatch({ type: "RESET"})
	}

  return (
    <>
      <h2>Context Tab</h2>
      <div>
        <span id="display">{state.count}</span>
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={(e) => {plusButtonHandler(e)}}>+</button>
        <button onClick={(e) => {minusButtonHandler(e)}}>-</button>
        <button onClick={(e) => {resetButtonHandler(e)}}>RESET</button>
      </div>
    </>
  )
}

export default ContextTab