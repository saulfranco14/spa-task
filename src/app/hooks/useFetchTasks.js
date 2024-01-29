// useFetchTasks.js
import { useState, useEffect, useCallback } from 'react';
import clientAxios from '../config/axios';

const useFetchTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await clientAxios.get('/v1/tasks/');
      setTasks(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return { tasks, loading, error, refetch: fetchTasks };
};

export default useFetchTasks;
