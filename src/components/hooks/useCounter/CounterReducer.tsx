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

export type CounterAction = IncrementAction | DecrementAction;

const CounterReducer = (state: CounterState, action: CounterAction): CounterState => {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + 1 };
		case "DECREMENT":
			return { count: state.count - 1 };
		default:
			throw new Error("Invalid action type");
	}
};

export { CounterReducer };