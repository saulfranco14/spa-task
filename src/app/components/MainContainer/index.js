import React, { useState } from "react";
import Tasks from "../Tasks/Tasks";
import AddTaskForm from "@/app/components/Tasks/AddTask";
import useCreateTask from "@/app/hooks/useCreateTask";
import useFetchTasks from "@/app/hooks/useFetchTasks";
import TaskFilterButton from "@/app/components/Filter";

const MainContainer = () => {
  const { tasks, loading, error, refetch } = useFetchTasks();
  const createTask = useCreateTask(refetch);
  const [filter, setFilter] = useState('all');

  const handleTaskCreate = async (taskData) => {
    await createTask(taskData);
  };

  const filteredTasks = filter === 'all' ? tasks : tasks.filter(task => task.status === filter);

  return (
    <main className="flex flex-col items-center justify-center w-full px-5">
      <h1 className="text-5xl font-bold mt-10 mb-5">
        Bienvenido a tu <span className="text-blue-600">Todo List</span>
      </h1>

      <p className="text-2xl mb-5">Organiza tus tareas de manera eficiente.</p>
      <AddTaskForm onTaskCreate={handleTaskCreate} />

      <TaskFilterButton filter={filter} setFilter={setFilter} />

      <div className="w-3/4 mt-6">
        {loading ? (
          <div className="text-center">Cargando tareas...</div>
        ) : error ? (
          <div className="text-center text-red-600">Ha ocurrido un error al cargar las tareas</div>
        ) : (
          <Tasks tasks={filteredTasks} loading={loading} error={error} refetch={refetch} />
        )}
      </div>
    </main>
  );
};

export default MainContainer;
