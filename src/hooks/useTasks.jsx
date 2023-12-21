import { useQuery } from "@tanstack/react-query";

const useTasks = () => {
    const { isLoading, isError, data: tasks, error, refetch } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/tasks');
            return res.json();
        },
    });

    return [tasks, refetch];
};

export default useTasks;
