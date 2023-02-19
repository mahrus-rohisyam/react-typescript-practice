export interface ITodo {
  id: string;
  desc: string;
  completed: boolean;
}

export interface TodoState {
  todoCount: number;
  todos: ITodo[];
  completed: number;
  pending: number;
}