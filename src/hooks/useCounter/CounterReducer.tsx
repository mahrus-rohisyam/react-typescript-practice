export interface CounterState {
	count: number;
}

interface Action {
	type: string;
}

interface IncrementAction extends Action {
	type: "INCREMENT";
}

interface DecrementAction extends Action {
	type: "DECREMENT";
}

interface ResetAction extends Action {
	type: "RESET";
}

export type CounterAction = IncrementAction | DecrementAction | ResetAction;

const CounterReducer = (state: CounterState, action: CounterAction): CounterState => {
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