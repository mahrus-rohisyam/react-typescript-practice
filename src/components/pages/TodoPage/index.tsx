import DefaultTemplate from "../../templates/DefaultTemplate";
import { TodoProvider } from "../../../hooks/useTodo/TodoProvider";

const TodoPage = () => {

	return (
		<TodoProvider>
			<DefaultTemplate>
				<h1>Todo</h1>
				{/* <ul>
					{todoState.todos.map((todo, index) => {
						return <li key={index}>{todo.desc}</li>;
					})}
				</ul> */}
			</DefaultTemplate>
		</TodoProvider>
	);
};

export default TodoPage;
