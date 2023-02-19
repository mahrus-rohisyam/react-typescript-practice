import React, { useState } from 'react'
import { CounterState } from '../../hooks/useCounter/CounterReducer'

const ContextTab = () => {
  const [data, setData] = useState<CounterState>({count: 0})

  const plusButtonHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		setData(prevState => {return {...prevState, count: prevState.count++}})
	};
	
	const minusButtonHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		setData(prevState => {return {...prevState, count: prevState.count--}})
	};

	const resetButtonHandler = (e: React.MouseEvent) => {
		e.preventDefault();
	}

  return (
    <>
      <h2>Context Tab</h2>
      <div>
        <span id="display">{data.count}</span>
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