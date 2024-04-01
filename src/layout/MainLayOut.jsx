import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../pages/footer/Footer";

const MainLayOut = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-8">
            <Navbar />
            <main className="mt-2 min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayOut;