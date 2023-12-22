import Tasks from '../components/tasks/Tasks';
import AddTask from '../components/tasks/addTask';
import Dashboard from './../dashboard/Dashboard';

const UserDashboard = () => {
    return (
        <div>
            <Dashboard />
            <AddTask />
            <Tasks />
        </div>
    );
};

export default UserDashboard;