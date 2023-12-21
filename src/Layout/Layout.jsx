import Dashboard from '../dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Layout = () => {
    return (
        <div>
            <Dashboard />
            <ToastContainer />
        </div>
    );
};

export default Layout;