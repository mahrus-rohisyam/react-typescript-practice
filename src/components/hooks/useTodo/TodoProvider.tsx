import { useReducer } from "react";

import { TodoContext } from "./TodoContext";
import { TodoReducer } from "./TodoReducer";
import { TodoState } from "../../interfaces/ITodo";

const INITIAL_STATE: TodoState = {
	todoCount: 2,
	todos: [
		{
			id: "1",
			desc: "Recolectar las piedras del infinito",
			completed: false,
		},
		{
			id: "2",
			desc: "Piedra del alma",
			completed: false,
		},
	],
	completed: 0,
	pending: 2,
};

interface props {
	children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
	const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

	const toggleTodo = (id: string) => {
		dispatch({ type: "toggleTodo", payload: { id } });
	};

	const addTodo = (id: string, desc: string, completed: boolean) => {
		const newTodo = { id, desc, completed };

		dispatch({ type: "addTodo", payload: newTodo });
	};

	return (
		<TodoContext.Provider value={{ todoState, toggleTodo, addTodo }}>
			{children}
		</TodoContext.Provider>
	);
};
