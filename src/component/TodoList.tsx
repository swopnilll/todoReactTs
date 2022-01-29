import { FC } from "react";

import { InterfaceTodoListProps } from "../interface/InterfaceTodoList";

/**
 * Renders all the todos.
 *
 * @returns {Jsx}
 */
const TodoList: FC<InterfaceTodoListProps> = (props) => {
  return (
    <>
      {props.todoList.map((todo) => (
        <div key={todo.id}>
          <div>Todo: {todo.value}</div>
          <div>Days Remaining: {todo.deadline}</div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
