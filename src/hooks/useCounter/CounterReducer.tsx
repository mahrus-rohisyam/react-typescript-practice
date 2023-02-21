import { CounterState } from "./CounterContext";

export type CounterAction =
	| { type: "INCREMENT" }
	| { type: "DECREMENT" }
	| { type: "RESET" };

const CounterReducer = (
	state: CounterState,
	action: CounterAction
): CounterState => {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + 1 };
		case "DECREMENT":
			return { count: state.count - 1 };
		case "RESET":
			return { count: 0 };
		default:
			throw new Error("Invalid action type");
	}
};

export { CounterReducer };
