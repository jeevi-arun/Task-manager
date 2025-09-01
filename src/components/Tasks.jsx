import { useState, useEffect } from "react";

function Tasks({ onAddTask, onUpdateTask, editingTask }) {
  const [task, setTask] = useState({
    name: "",
    category: "",
    status: "",
    date: "",
  });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    } else {
      setTask({ name: "", category: "", status: "", date: "" });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name || !task.category || !task.status || !task.date) return;

    if (editingTask) {
      onUpdateTask(task);
    } else {
      onAddTask(task);
    }

    setTask({ name: "", category: "", status: "", date: "" });
  };

  return (
    <div className=" mt-5 rounded-sm">
         <h2 className="text-xl font-medium">What's on your mind?</h2>
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-300 mt-4 rounded-md">
       
      <div className="grid grid-cols-2  p-4 gap-x-4 md:gap-x-8 gap-y-5  md:p-10">
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
          placeholder="Task Name"
          className="border px-4 py-2 rounded w-full"
          required
        />

        <select
          name="category"
          value={task.category}
          onChange={handleChange}
          className="border px-4 py-2 rounded w-full"
          required
        >
          <option value="">Select Category</option>
          <option value="Personal">Personal</option>
          <option value="Professional">Professional</option>
          <option value="Social">Social</option>
          <option value="General">General</option>
        </select>

        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          className="border px-4 py-2 rounded w-full"
          required
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <input
          type="date"
         name="date"
          value={task.date}
          onChange={handleChange}
          className="border px-4 py-2 rounded w-full"
          required
        />
      </div>
      <div className=" flex justify-center">

      <button
        type="submit"
        className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-violet-950 mb-3"
      >
        {editingTask ? "Update Task" : "Add Task"}
      </button>
      </div>
    </form>
    </div>
   
  );
}

export default Tasks;
