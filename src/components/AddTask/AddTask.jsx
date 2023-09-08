import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function AddTask() {


  const localData = localStorage.getItem("userInfo");
  let userdetail = JSON.parse(localData);
  // State variables for task details
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Completed");
  const navigate = useNavigate();

  // State variable for task list
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Function to handle task creation
  const handleCreateTask = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      dueDate,
      priority,
      assignedTo: "", // Add a state for assignedTo and handle assignment logic
    };
    if (newTask) {
      toast.success("Task Added");
      navigate("/all-task");
    }
    // Update the tasks list with the new task
    setTasks([...tasks, newTask]);

    // Clear form fields
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Completed");

    // Store updated tasks list in localStorage
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  };

  return (
    <div className="px-4">
      <h2 className="font-bold py-2">Create Task</h2>
      <form onSubmit={handleCreateTask}>
        <div>
          <h3>Tisk Title</h3>
          <input
            className="w-96 focus:outline-0 px-4 py-2 rounded-md border border-gray  text-gray-800"
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <h3>Task Detail:</h3>
          <textarea
            required
            className="w-96 focus:outline-0 px-4 py-2 rounded-md border border-gray  text-gray-800"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="pr-2">Due Date:</label>
          <input
            type="date"
            required
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="pt-3">
          <label>Priority:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="completed">Completed</option>
            <option value="inProgress">In Progress</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        {
          userdetail ? <button
          type="submit"
          className="block mt-2 py-1 px-36 text-center rounded-xl bg-blue-700 text-white"
        >
          Add Task
        </button> : <><h3 className="text-green-600 font-medium pt-3">If you want to add task  Please</h3><button className="py-1 px-4 text-red-600 font-bold underline"><Link to="/signup">Account Create First</Link></button></>
        }
      </form>
    </div>
  );
}

export default AddTask;
