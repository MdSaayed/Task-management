import { GoPlus } from "react-icons/go";
import { useForm } from 'react-hook-form';
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

// ... (imports and other code)

const UpdateTask = () => {
    const { _id, title, description, status, priority, deadline } = useLoaderData();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleUpdateTask = async (data) => {
        // Validate fields
        if (!data.title) {
            toast.error('Title is required');
            return;
        }
        if (!data.description) {
            toast.error('Description is required');
            return;
        }
        if (!data.priority) {
            toast.error('Priority is required');
            return;
        }
        if (!data.status) {
            toast.error('Status is required');
            return;
        }
        if (!data.deadline) {
            toast.error('Deadline is required');
            return;
        }
        // If all fields are valid, proceed with fetch
        const res = await fetch(`https://taskmanagement-five.vercel.app/taskUpdate/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (res.ok) {
            toast.success('Task updated successfully.');
            console.log(res);
        }
    };

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center justify-center w-full">
                <div>
                    <h3 className="font-bold text-lg mb-2">Update Task</h3>
                    {/* add task form */}
                    <form onSubmit={handleSubmit(handleUpdateTask)}>
                        <input {...register('title', { required: true })} className="border focus:outline-none py-1 px-2 rounded-sm w-full mb-2" placeholder="Task Title" defaultValue={title} />
                        {errors.title && <span className="text-red-500 text-sm -mt-2 block">Title is required</span>}

                        <textarea {...register('description', { required: true })} className="border focus:outline-none py-1 px-2 rounded-sm w-full mb-2" placeholder="Task Description" defaultValue={description} />
                        {errors.description && <span className="text-red-500 text-sm -mt-2 block">Description is required</span>}

                        <div className="flex gap-4">
                            <div>
                                <select {...register('priority', { required: true })} className="border focus:outline-none w-full leading-none py-1 px-2 rounded-sm mb-2">
                                    <option value="">Select Priority</option>
                                    <option value="low" selected={priority === 'low'}>Low</option>
                                    <option value="moderate" selected={priority === 'moderate'}>Moderate</option>
                                    <option value="high" selected={priority === 'high'}>High</option>
                                    {/* Add more options as needed */}
                                </select>
                                {errors.priority && <span className="text-red-500 text-sm -mt-2 block">Priority is required</span>}
                            </div>
                            <div>
                                <label className="block mb-2">
                                    <input {...register('deadline', { required: true })} type="date" className="border focus:outline-none   py-1 px-2 rounded-sm w-full mb-2" defaultValue={deadline} />
                                </label>
                                {errors.deadline && <span className="text-red-500 text-sm -mt-2 block">Deadline is required</span>}
                            </div>
                        </div>

                        <select {...register('status', { required: true })} className="border focus:outline-none w-full leading-none py-1 px-2 rounded-sm mb-2">
                            <option value="">Change Status</option>
                            <option value="to-do" selected={status === 'to-do'}>To-do</option>
                            <option value="on-going" selected={status === 'on-going'}>Ongoing</option>
                            <option value="completed" selected={status === 'completed'}>Completed</option>
                        </select>
                        {errors.status && <span className="text-red-500 text-xm -mt-2 block">Status is required</span>}

                        <div className="flex justify-end">
                            <input className="bg-[#31A0FE] text-white rounded py-1 px-4 text-sm" type="submit" value="Update Task" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTask;
