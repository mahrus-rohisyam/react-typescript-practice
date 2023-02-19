import React, { createContext, useReducer } from "react";
import {
	CounterAction,
	CounterReducer,
	CounterState,
} from "./CounterReducer";

const InitialCounterState: CounterState = { count: 0 };

interface CounterContextValue {
	state: CounterState;
	dispatch: React.Dispatch<CounterAction>;
}

export const CounterContext = createContext<CounterContextValue | null>(
	null
);

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(CounterReducer, InitialCounterState);
	const value = { state, dispatch };
	return (
		<CounterContext.Provider value={value}>{children}</CounterContext.Provider>
	);
};

export default CounterProvider;
