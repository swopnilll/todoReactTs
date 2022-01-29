import { InterfaceNewTodo } from "./InterfaceNewTodo"; 

export interface InterfaceTodoAddBar {
  addTodoInput: (todo: InterfaceNewTodo) => void;
}
