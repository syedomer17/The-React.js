import React from 'react';

const ToDoList = () => {
  const todo = [
    { id: 101, text: "Study React" },
    { id: 102, text: "Go for a walk" },
    { id: 103, text: "Clean the house" },
  ];

  return (
    <div>
      <ul>
        {todo.map((todos) => (
          <li key={todos.id}>{todos.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
