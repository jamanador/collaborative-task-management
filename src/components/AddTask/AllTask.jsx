import TaskCard from "./TaskCard";

const AllTask = () => {
  const taskInfo = localStorage.getItem("tasks");
  const tasks = JSON.parse(taskInfo);
  return (
    <>
      <h2 className="mt-11 py-3 font-bold">Task List</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
        {tasks?.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </>
  );
};

export default AllTask;
