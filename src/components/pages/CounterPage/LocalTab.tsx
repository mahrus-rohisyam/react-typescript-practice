import React from 'react'
import { useLocalStorage } from '../../../hooks/useLocalStorage';

const LocalTab = () => {
  const [state, setState] = useLocalStorage('counter', 1)

	console.log(state);
	

	const plusButtonHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		setState(state! + 1);
	};
	
	const minusButtonHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		setState(state! - 1);
	};

  const resetButtonHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setState(1)
  }

  return (
    <div>
      <h2>Local Tab</h2>
      <div>
					<span>{state! > 0 ? state : 0}</span>
				</div>
				<div style={{ display: "flex" }}>
					<button onClick={(e) => {plusButtonHandler(e)}}>+</button>
					<button onClick={(e) => {minusButtonHandler(e)}}>-</button>
					<button onClick={(e) => {resetButtonHandler(e)}}>RESET</button>
				</div>
    </div>
  )
}

export default LocalTab