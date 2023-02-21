import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const useCounter = () => {
	const { counterState, decrement, increment, reset } =
		useContext(CounterContext);

	return {
		counterState,
		decrement,
		increment,
		reset,
	};
};

export default useCounter;
