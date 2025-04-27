import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All")

  const deleteTask = (text) => {
    setTasks(tasks.filter((task) => task.text !== text));
  };

  const filterTasks = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setTasks(TASKS);
    } else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
      setTasks(filteredTasks);
    }
  };

  const onTaskFormSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        filterTasks={filterTasks}
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
