import { useForm } from "react-hook-form";

const AddTask = () => {
  const { register, handleSubmit } = useForm();
  const handleAddTask = (data) => {
    console.log("adddded", data);
    const task = data.name;
    const taskDetail = data.description;
    const tasks = {
      task,
      taskDetail,
    };
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  return (
    <div>
      <h4 className="font-bold py-3">Add New Task </h4>
      <form onSubmit={handleSubmit(handleAddTask)}>
        <label htmlFor="name" className="block text-gray-600 py-1">
          Task Name
        </label>
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: "name is required" })}
          className="w-96 focus:outline-0 px-4 py-2 rounded-md border border-gray  text-gray-800"
        />
        <label htmlFor="name" className="block text-gray-600 py-1">
          Task Detail
        </label>
        <textarea
          type="text"
          {...register("description", {
            required: "Detail Explaintation is required",
          })}
          placeholder="Write your task Detail"
          className="w-96 focus:outline-0 px-4 py-2 rounded-md border border-gray  text-gray-800"
        />
        <button
          type="submit"
          className="block mt-2 py-1 px-36 text-center rounded-xl bg-blue-700 text-white"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
