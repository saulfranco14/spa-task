import { useCallback } from "react";
import clientAxios from "../config/axios";

const useCreateTask = (refetch) => {
  const createTask = useCallback(
    async (taskData) => {
      try {
        const response = await clientAxios.post(
          `${process.env.API}/v1/tasks/`,
          taskData
        );
        await refetch(); 
        return response.data;
      } catch (error) {
        console.error("Error al crear tarea:", error);
      }
    },
    [refetch]
  );

  return createTask;
};

export default useCreateTask;
