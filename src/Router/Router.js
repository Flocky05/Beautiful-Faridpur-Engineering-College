import Department from "../Components/Department/Department";
import HomePage from "../Components/Shared/HomePage/HomePage";
import Main from "../Components/Shared/Main/Main";
import Teacher from "../Components/Teacher/Teacher";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/Department",
        element: <Department></Department>,
      },
      {
        path: "HomePage",
        element: <HomePage></HomePage>,
      },

      {
        path: "Teacher",
        element: <Teacher></Teacher>,
      },
    ],
  },
]);
