import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskCard from "./TaskCard";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const taskData = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(taskData);
  }, []);

  const [filter, setFilter] = useState("all");

  const filterTasks = tasks?.filter((task) => {
    if (filter === "completed") return task.priority === "completed";
    if (filter === "inProgress") return task.priority === "inProgress";
    if (filter === "pending") return task.priority === "pending";
    return true;
  });

  const alltask = [...filterTasks];
  return (
    <>
      <div className="flex justify-between my-10 mx-4">
        <h2 className="font-bold">Task List</h2>
        <div>
          <label>Filter:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="inProgress">In Progress</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>
      <div className="text-center">
        {alltask?.length === 0 && (
          <div>
            <h3 className="text-red-500 font-medium">
              Currently dont have any task Data !!
            </h3>
            <p className="py-2 text-green-500 font-bold"><Link to="/add-task">Click to Add Task</Link> </p>
          </div>
        )}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
        {alltask?.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </>
  );
};

export default AllTask;
