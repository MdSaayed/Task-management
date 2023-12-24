


import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useTasks from "../../hooks/useTasks";
import { Link } from "react-router-dom";


const Tasks = () => {
    const [data, refetch] = useTasks();
    const [sections, setSections] = useState({
        'to-do': [],
        "on-going": [],
        completed: [],
    });

    useEffect(() => {
        if (data) {
            setSections({
                "to-do": data.filter((item) => item.status === "to-do"),
                "on-going": data.filter((item) => item.status === "on-going"),
                completed: data.filter((item) => item.status === "completed"),
            });
        }
    }, [data]);

    const onDragEnd = async (result) => {
        if (!result.destination) return;

        // Update local state immediately
        const updatedSections = { ...sections };
        const [moveTask] = updatedSections[result.source.droppableId].splice(
            result.source.index,
            1
        );
        updatedSections[result.destination.droppableId].splice(
            result.destination.index,
            0,
            moveTask
        );
        setSections(updatedSections);

        const order = result.destination.index + 1;
        const data = {
            id: moveTask._id,
            status: result.destination.droppableId,
            order,
        }
        console.log('Sending PATCH request with data:', data);
        const res = await fetch("https://taskmanagement-five.vercel.app/updatedragstatus", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await fetch(
                    `https://taskmanagement-five.vercel.app/tasks/${id}`,
                    {
                        method: "DELETE",
                    }
                );

                if (res) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                }
            }
        });
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 py-8">
                {Object.keys(sections).map((sectionKey) => (
                    <div key={sectionKey} >
                        <div className={` px-5 py-3 text-center rounded-md ${sectionKey === "to-do" ? "bg-[#CAD9F6]" : sectionKey === "on-going" ? "bg-[#FFE4C2]" : sectionKey === "completed" ? "bg-[#FAD0C6]" : ""}`} key={sectionKey}>
                            <h2 className="text-[18px] font-bold"> {sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)} </h2>
                            <Droppable droppableId={sectionKey} key={sectionKey}>
                                {(provided) => (
                                    <ul
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        className="rounded-md my-5 text-left"
                                    >
                                        {sections[sectionKey].map((task, index) => (
                                            <Draggable
                                                key={task._id}
                                                draggableId={task._id}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <li
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        ref={provided.innerRef}
                                                        className="p-2   capitalize bg-white shadow-lg rounded-md my-3"
                                                    >
                                                        <div className="bg-white rounded p-2 mt-2" key={task._id}>
                                                            <div className="flex justify-between items-center">
                                                                <h2 className="font-bold text-base">{task?.title}</h2>
                                                                <div className="flex gap-2">
                                                                    <Link to={`/dashboard/updateTask/${task._id}`}><MdOutlineModeEditOutline /></Link>
                                                                    <RiDeleteBin6Line onClick={() => handleDelete(task?._id)} className="cursor-pointer" />
                                                                </div>
                                                            </div>
                                                            <p className="text-[#5C5C5C] text-sm mt-1">{task?.description}</p>
                                                            <div className="flex gap-2 mt-2">
                                                                <p className="text-xs text-[#f8b9a9] font-bold">Priority: <span className="text-gray-500">{task?.priority},</span></p>
                                                                <p className="text-xs text-[#f8b9a9] font-bold">Deadline: <span className="text-gray-500">{task?.deadline}</span></p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </ul>
                                )}
                            </Droppable>
                        </div>
                    </div>
                ))}
            </div>
        </DragDropContext>
    );
};

export default Tasks;





