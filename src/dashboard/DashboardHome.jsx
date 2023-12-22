import AddTask from '../components/tasks/addTask';
import Tasks from '../components/tasks/Tasks';

const DashboardHome = () => {
    return (
        <div>
            <AddTask />
            <Tasks />
        </div>
    );
};

export default DashboardHome;