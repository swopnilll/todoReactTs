import { FC, useState } from "react";

import "./App.css";

import "./styles/output.css";

import TodoList from "./component/TodoList";
import TodoAddBar from "./component/TodoAddBar";

import { InterfaceNewTodo } from "./interface/InterfaceNewTodo";
import { InterfaceTodoList } from "./interface/InterfaceTodoList";

/**
 * <App />
 * Todo App main componenet.
 */
const App: FC = () => {
  /**
   * Use State Hook.
   *
   * @type {InterfaceTodoList[]}
   */
  const [todoList, updateTodoList] = useState<InterfaceTodoList[]>([]);

  /**
   * Method to add new todo in todoList.
   *
   * @param {InterfaceNewTodo} todo
   */
  const addTask = (todo: InterfaceNewTodo): void => {
    const newTodo = {
      ...todo,
      id: todoList.length + 1,
      isDeleted: false,
    };

    updateTodoList([...todoList, newTodo]);
  };

  /**
   * Return of App componenet.
   *
   * @returns {Jsx}
   */
  return (
    <div className="App">
      <div>
        <TodoAddBar addTodoInput={addTask} />
      </div>
      <div>
        <TodoList todoList={todoList} />
      </div>
    </div>
  );
};

export default App;
