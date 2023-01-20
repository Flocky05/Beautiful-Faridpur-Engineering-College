import Navbar from "../Components/Shared/Header/Navbar";
import HomePage from "../Components/Shared/HomePage/HomePage";
import Main from "../Components/Shared/Main/Main";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/nav",
        element: <Navbar></Navbar>,
      },
      {
        path: "/homepage",
        element: <HomePage></HomePage>,
      },
    ],
  },
]);
