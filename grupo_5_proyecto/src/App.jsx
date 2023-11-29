import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  
  return (
    <main className="bg-zinc-900 h-screen p-10">
      <div className="container mx-auto">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;
