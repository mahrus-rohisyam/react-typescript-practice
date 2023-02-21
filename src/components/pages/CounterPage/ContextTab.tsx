import React, { useContext } from "react";
import { CounterContext } from "../../../hooks/useCounter/CounterContext";
import useCounter from "../../../hooks/useCounter";

const ContextTab = () => {
	// Cara Pertama:
	// const { counterState, increment, decrement, reset  } = useContext(CounterContext);
	// Cara Kedua (Custom Hooks)
	const { counterState, decrement, increment, reset } = useCounter();

	const plusButtonHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		increment();
	};

	const minusButtonHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		decrement();
	};

	const resetButtonHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		reset();
	};

	return (
		<>
			<h2>Context Tab</h2>
			<div>
				<span id="display">{counterState.count}</span>
			</div>
			<div style={{ display: "flex" }}>
				<button
					onClick={(e) => {
						plusButtonHandler(e);
					}}
				>
					+
				</button>
				<button
					onClick={(e) => {
						minusButtonHandler(e);
					}}
				>
					-
				</button>
				<button
					onClick={(e) => {
						resetButtonHandler(e);
					}}
				>
					RESET
				</button>
			</div>
		</>
	);
};

export default ContextTab;
