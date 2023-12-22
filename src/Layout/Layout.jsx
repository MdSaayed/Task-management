
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../components/footer/Footer';

const Layout = () => {
    return (
        <div>
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Layout;