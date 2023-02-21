import React from "react";

export type CounterState = {
	count: number;
};

export type CounterContextProps = {
	counterState: CounterState;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const CounterContext = React.createContext<CounterContextProps>(
  {} as CounterContextProps
)
