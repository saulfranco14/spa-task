import { useCallback } from "react";
import clientAxios from "../config/axios";

const useDeleteTask = (refetch) => {
  const deleteTask = useCallback(
    async (taskId) => {
      try {
        await clientAxios.delete(`/v1/tasks/${taskId}`);
        await refetch();
      } catch (error) {
        console.error("Error al eliminar tarea:", error);
      }
    },
    [refetch]
  );

  return deleteTask;
};

export default useDeleteTask;
