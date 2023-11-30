import React, { useContext } from 'react';
import { TaskContext } from '../src/context/TaskContext';
import TaskItem from './TaskItem';

function TaskList() {
  const { tasks, deleteTask, completeTask } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>;
  }

  const handleCompleteTask = (taskId) => {
    completeTask(taskId);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div className="grid grid-cols-4 gap-2 p-4 rounded-md">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={() => handleCompleteTask(task.id)}
          onDelete={() => handleDeleteTask(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
