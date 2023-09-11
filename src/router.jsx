import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import Task from "./screens/Task/Task";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />,
    },
    {
        path: "/task", 
        element: <Task />,
    }
]);
