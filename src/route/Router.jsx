import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <LogIn />
            }
        ]
    }
]);

export default router;