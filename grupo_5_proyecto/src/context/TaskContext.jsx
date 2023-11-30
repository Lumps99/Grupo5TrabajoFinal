import React, { createContext, useState, useEffect } from "react";
import { tasks as data } from "../tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  // Obtener tareas guardadas en localStorage o utilizar datos iniciales
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || data;
  const [tasks, setTasks] = useState(initialTasks);

  function createTask(newTask) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        title: newTask.title,
        description: newTask.description,
        completed: false,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function completeTask(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  useEffect(() => {
    // Guardar tareas en localStorage cada vez que cambien
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask, completeTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}