/**
 * Interface for todo list.
 */
export interface InterfaceTodoList {
  value: string;
  isDeleted: boolean;
  id: number | string;
  deadline: number | string;
}

/**
 * Interface for <TodoList /> props.
 */
export interface InterfaceTodoListProps {
  todoList: InterfaceTodoList[];
}
