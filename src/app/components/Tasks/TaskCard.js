import React from "react";
import PropTypes from "prop-types";

const TaskCard = ({ task, onUpdate, onDelete, onStatusChange }) => {
  const statusClasses =
    task.status === "completada" ? "bg-green-500" : "bg-indigo-500";

  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
      <button
        className={`px-4 py-1 text-white my-4 rounded-full text-sm font-medium transition duration-300 focus:outline-none focus:ring-2 ${statusClasses}`}
        onClick={onStatusChange}
      >
        {task.status}
      </button>
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={() => onUpdate(task)}
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300"
        >
          Actualizar
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default TaskCard;
