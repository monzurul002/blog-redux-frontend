import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayOut from "../layout/MainLayOut";
import Login from "../pages/login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    },

]);
