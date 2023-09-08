import { useEffect, useState } from "react";
import Profile from "../Profile/Profile";

const Dashboard = () => {
  const localData = localStorage.getItem("userInfo");
  let userdetail = JSON.parse(localData);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const taskData = JSON.parse(localStorage.getItem("tasks") || []);
    setTasks(taskData);
  }, []);

  const completedTasks = tasks.filter(
    (task) => task.priority === "completed"
  ).length;
  const inProgressTasks = tasks.filter(
    (task) => task.priority === "inProgress"
  ).length;
  const pendingTasks = tasks.filter(
    (task) => task.priority === "pending"
  ).length;

  return (
    <div className="px-4 md:px-0">
      <h3 className="font-extrabold py-2 border border-b-gray-100 rounded-lg p-1 px-3 w-6/12">
        Dashboard
      </h3>
      <h4 className="mt-6 font-bold">
        Profile of{" "}
        <button className="border border-gray-300 p-1 px-6 ml-2">
          {userdetail?.name}
        </button>
      </h4>
      <Profile />
      <br />
      <div>
        <h3 className="font-bold pb-2">Summary of Tasks</h3>
        <div className="flex flex-wrap justify-center items-center gap-y-6 gap-x-8">
          <div className="border border-slate-200 p-8 text-center">
            <h3 className="font-bold"> {completedTasks}</h3>
            <p className="font-medium">Completed Tasks</p>
          </div>

          <div className="border border-slate-200 p-8 text-center">
            <h3>{inProgressTasks}</h3>
            <p>In Progress Tasks</p>
          </div>
          <div className="border border-slate-200 p-8 text-center">
            <h3>{pendingTasks}</h3>
            <p>Pending Tasks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
