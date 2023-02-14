import React from 'react';

function Todo({ todo, toggleCompleted }) {
  const { todoId, task, isCompleted } = todo;
  const idAttr = `todo-item-${todoId}`;
  const taskClass = isCompleted
    ? 'form-check-label is-completed'
    : 'form-check-label';
  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          id={idAttr}
          type="checkbox"
          checked={isCompleted}
          className="form-check-input mr-2"
          onChange={() => toggleCompleted(todoId)}/>
        <label className={taskClass} htmlFor={idAttr}>
          { task }
        </label>
      </div>
    </li>
  );
}

export default function TodoList({ todos, toggleCompleted }) {
  return (
    <ul className="list-group shadow-sm">
      {
        todos.map((todo) => {
          return (
            <Todo
              key={todo.todoId}
              todo={todo}
              toggleCompleted={toggleCompleted}/>
          );
        })
      }
    </ul>
  );
}
