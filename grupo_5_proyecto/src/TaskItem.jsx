import React, { useState } from 'react';

const TaskItem = ({ task, onDelete, onComplete }) => {
  const [isCompleted, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!isCompleted);
    onComplete();
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1
        style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
        className="text-xl font-bold capitalize"
      >
        {task.title}
      </h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-green-500 px-2 py-1 rounded-md mt-4 hover:bg-green-400"
        onClick={handleComplete}
      >
        {isCompleted ? 'Desmarcar' : 'Completar'}
      </button>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400 ml-2"
        onClick={onDelete}
      >
        Eliminar tarea
      </button>
    </div>
  );
};

export default TaskItem;