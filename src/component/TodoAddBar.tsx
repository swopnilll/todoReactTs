import { useState, FC, ChangeEvent, useRef } from "react";

import { InterfaceTodoAddBar } from "../interface/InterfaceTodoAddBar";

/**
 * <TodoAddBar addTodoInput={addTask} />
 * Component to add todo.
 *
 * @param props
 * @returns {Jsx}
 */
const TodoAddBar: FC<InterfaceTodoAddBar> = (props) => {
  const [todoInputText, onTodoInputTextChange] = useState<string>("");
  const [todoDeadline, onTodoDeadlineNumberChange] = useState<number | string>(
    ""
  );

  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * Method to handle input change.
   *
   * @param event
   */
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "todoinput") {
      onTodoInputTextChange(event.target.value);

      return;
    }
    onTodoDeadlineNumberChange(event.target.value);
  };

  /**
   * Method to handle add button click.
   */
  const onAddButtonClick = async () => {
    const todo = {
      value: todoInputText,
      deadline: todoDeadline,
    };

    await props.addTodoInput(todo);

    clearStateFotTodoAddBar();
  };

  /**
   * Method to clear state of Todo Add Bar
   * after add button click.
   */
  const clearStateFotTodoAddBar = () => {
    onTodoInputTextChange("");

    onTodoDeadlineNumberChange("");
  };

  return (
    <div>
      <div>
        <input
          value={todoInputText}
          placeholder="Enter todo input"
          name="todoinput"
          ref={inputRef}
          onChange={handleInputChange}
        />
        <input
          value={todoDeadline}
          placeholder="Enter Deadline"
          name="deadline"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button onClick={onAddButtonClick}>Add</button>
      </div>
    </div>
  );
};

export default TodoAddBar;
