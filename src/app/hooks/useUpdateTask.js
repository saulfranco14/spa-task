import { useCallback } from "react";
import clientAxios from "../config/axios";

const useUpdateTask = (refetch) => {
  const updateTask = useCallback(
    async (taskId, taskData) => {
      try {
        const response = await clientAxios.put(
          `${process.env.API}/v1/tasks/${taskId}`,
          taskData
        );
        await refetch();
        return response.data;
      } catch (error) {
        
      }
    },
    [refetch]
  );

  return updateTask;
};

export default useUpdateTask;
