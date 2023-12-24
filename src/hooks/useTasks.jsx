import { useQuery } from "@tanstack/react-query";

const useTasks = () => {
    const { isLoading, isError, data: tasks, error, refetch } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const res = await fetch('https://taskmanagement-five.vercel.app/tasks');
            return res.json();
        },
    });

    return [tasks, refetch];
};

export default useTasks;
