
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Layout;