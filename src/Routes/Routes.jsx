import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import AddTask from "../components/AddTask/AddTask";
import AllTask from "../components/AddTask/AllTask";
import Login from "../components/Register/Login";
import SignUp from "../components/Register/SignUp";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/add-task',
                    element: <AddTask/>
                },
                {
                    path:'/all-task',
                    element:<AllTask/>
                },
                {
                    path: '/signup',
                    element: <SignUp/>
                },
                {
                    path: '/login',
                    element: <Login/>
                },
                {
                    path:"/profile",
                    element:<Profile/>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router}> </RouterProvider>
    );
};

export default Routes;