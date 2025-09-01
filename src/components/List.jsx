function List({ tasks, onDelete, onEdit }) {
  if (tasks.length === 0) return null;

  return (
    <div className="mt-6 text-sm md:text-lg ">
      <h2 className="text-xl font-semibold my-4">Your Tasks</h2>
      <table className=" border text-left min-w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-1 py-2 ">Task Name</th>
            <th className="border px-1 py-2 md:px-4">Category</th>
            <th className="border px-1 py-2 md:px-4">Status</th>
            <th className="border px-1 py-2 md:px-4">Finish by</th>
            <th className="border px-1 py-2 md:px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border px-1 py-2 md:px-4">{task.name}</td>
              <td className="border px-1 py-2 md:px-4">{task.category}</td>
              <td className="border px-1 py-2 md:px-4">{task.status}</td>
              <td className="border px-1 py-2 md:px-4">{task.date}</td>
              <td className="border px-1 py-2 md:px-4 space-y-2 md:space-x-2">
                <button
                  onClick={() => onEdit(index)}
                  className="bg-green-400 text-white px-5 py-1 rounded hover:bg-green-800 "
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
