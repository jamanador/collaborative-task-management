const TaskCard = ({ task }) => {
  const { title, description, dueDate, priority } = task;
  return (
    <div className="mx-4 border border-slate-200 rounded-xl p-2 shadow-sm">
      <div className="card-body items-center text-center">
        <h2 className="font-bold">Task : {title}</h2>
        <p>Detail : {description}</p>
        <p>
          Due Date : <span className="text-red-500">{dueDate}</span>
        </p>
        <p>Status : {priority}</p>
      </div>
    </div>
  );
};

export default TaskCard;
