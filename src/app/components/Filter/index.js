import React from "react";
import PropTypes from "prop-types";

const TaskFilterButton = ({ filter, setFilter }) => {
  return (
    <div className="text-center my-4">
      <p className="text-lg font-semibold mb-3">Filtrar Tareas:</p>
      <div className="inline-flex rounded-md shadow-sm">
        <button
          className={`px-4 py-2 rounded-l-lg ${
            filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-blue-500 hover:text-white"
          }`}
          onClick={() => setFilter("all")}
        >
          Todas
        </button>
        <button
          className={`px-4 py-2 ${
            filter === "completada" ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-green-500 hover:text-white"
          }`}
          onClick={() => setFilter("completada")}
        >
          Completadas
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${
            filter === "pendiente" ? "bg-indigo-600 text-white" : "bg-gray-200 hover:bg-indigo-500 hover:text-white"
          }`}
          onClick={() => setFilter("pendiente")}
        >
          Pendientes
        </button>
      </div>
    </div>
  );
};

TaskFilterButton.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default TaskFilterButton;
