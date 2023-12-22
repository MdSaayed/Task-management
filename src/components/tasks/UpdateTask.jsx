import { GoPlus } from "react-icons/go";
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import useTasks from "../../hooks/useTasks";

const UpdateTask = () => {
    const [tasks, refetch] = useTasks();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

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
            // If all fields are valid, proceed with fetch
            const res = await fetch('http://localhost:5000/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (res.ok) {
                toast.success('Task added successfully.');
                refetch();
                reset();
                document.getElementById('my_modal_3').close();
            } 
    };

    return (
        <div className="flex justify-between items-center">
            <div>
                <h2 className="font-bold text-2xl text-[#3D3D3D]">Tasks</h2>
            </div>
            <div>
                <button className="bg-[#2563DC] text-white rounded py-1 px-2 md:py-2 md:px-6 flex items-center gap-2 text-sm " onClick={() => document.getElementById('my_modal_3').showModal()}>New task <GoPlus className="text-white" /></button>
                <dialog id="my_modal_3" className="modal rounded">
                    <div className="modal-box  w-full md:m-4 md:w-[500px] p-4">
                        <h3 className="font-bold text-lg mb-2">Add Task</h3>
                        {/* add task form */}
                        <form onSubmit={handleSubmit(handleUpdateTask)}>
                            <input {...register('title', { required: true })} className="border focus:outline-none py-1 px-2 rounded-sm w-full mb-2" placeholder="Task Title" />
                            {errors.title && <span className="text-red-500 text-sm -mt-2 block">Title is required</span>}

                            <textarea {...register('description', { required: true })} className="border focus:outline-none py-1 px-2 rounded-sm w-full mb-2" placeholder="Task Description" />
                            {errors.description && <span className="text-red-500 text-sm -mt-2 block">Description is required</span>}

                            <input {...register('priority', { required: true })} className="border focus:outline-none py-1 px-2 rounded-sm w-full mb-2" placeholder="Task priority" />
                            {errors.priority && <span className="text-red-500 text-sm -mt-2 block">Priority is required</span>}

                            <input {...register('status', { required: true })} className="border focus:outline-none py-1 px-2 rounded-sm w-full mb-2" placeholder="Status" defaultValue={'to-do'} hidden />
                            {errors.status && <span className="text-red-500 text-xm -mt-2 block">Status is required</span>}

                            <div className="flex justify-end">
                                <input className="bg-[#2563DC] text-white rounded py-1 px-4 text-sm" type="submit" value="Add Task" />
                            </div>
                        </form>
                        {/* end add task form */}
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default UpdateTask;