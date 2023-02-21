import React, { useReducer } from "react";
import {
	CounterReducer,
} from "./CounterReducer";
import { CounterContext, CounterState } from "./CounterContext";

const InitialCounterState: CounterState = { count: 0 };

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
	const [counterState, dispatch] = useReducer(CounterReducer, InitialCounterState);
	// const value = { state, dispatch };
	const increment = () => {
		dispatch({type: "INCREMENT"})
	}

	const decrement = () => {
		dispatch({type: "DECREMENT"})
	}

	const reset = () => {
		dispatch({type: "RESET"})
	}

	return (
		<CounterContext.Provider value={{counterState, increment, decrement, reset}}>{children}</CounterContext.Provider>
	);
};

export default CounterProvider;
