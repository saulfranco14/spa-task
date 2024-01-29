import React, { useState } from "react";
import TaskCard from "@/app/components/Tasks/TaskCard";
import Modal from "@/app/components/Modal";
import useDeleteTask from "@/app/hooks/useDeleteTask";
import useUpdateTask from "@/app/hooks/useUpdateTask";

const Tasks = ({ tasks, loading, error, refetch }) => {
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const deleteTask = useDeleteTask(refetch);
  const updateTask = useUpdateTask(refetch);

  const handleUpdateClick = (task) => {
    setCurrentTask(task);
    setUpdateModalOpen(true);
  };

  const handleDeleteClick = (taskId) => {
    setCurrentTask(taskId);
    setDeleteModalOpen(true);
  };

  const handleUpdate = async (updatedTask) => {
    await updateTask(currentTask._id, updatedTask);
    setUpdateModalOpen(false);
  };

  const handleDelete = async () => {
    setDeleteModalOpen(false);
    await deleteTask(currentTask);
  };

  const handleStatusChange = async (task) => {
    const updatedStatus =
      task.status === "completada" ? "pendiente" : "completada";
    await updateTask(task._id, { ...task, status: updatedStatus });
  };

  if (loading) return <p>Cargando tareas...</p>;
  if (error) return <p>Ha ocurrido un error al cargar las tareas</p>;

  return (
    <>
      {tasks.length === 0 ? (
        <div className="p-4 rounded-md text-center">
          <p className="text-gray-600 text-lg">No hay tareas.</p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-4">Tareas</h2>
          <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onUpdate={() => handleUpdateClick(task)}
                onDelete={() => handleDeleteClick(task._id)}
                onStatusChange={() => handleStatusChange(task)}
              />
            ))}
          </div>
        </>
      )}

      {isUpdateModalOpen && (
        <Modal
          onClose={() => setUpdateModalOpen(false)}
          onSave={handleUpdate}
          task={currentTask}
          modalTitle="Actualizar Tarea"
        />
      )}

      {isDeleteModalOpen && (
        <Modal
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={handleDelete}
          modalTitle="¿Estás seguro de eliminar esta tarea?"
          confirmOnly
        />
      )}
    </>
  );
};

export default Tasks;
