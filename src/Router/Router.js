import Academy from "../academy/academy";
import Department from "../Components/Department/Department";
import HomePage from "../Components/Shared/HomePage/HomePage";
import Main from "../Components/Shared/Main/Main";
import Student from "../Components/Student/Student";
import Teacher from "../Components/Teacher/Teacher";
import Gallery from "../Gallary/Gallary";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/HomePage",
        element: <HomePage></HomePage>,
      },

      {
        path: "/Teacher",
        element: <Teacher></Teacher>,
      },
      {
        path: "/Student",
        element: <Student></Student>,
      },
      {
        path: "/Department",
        element: <Department></Department>,
      },
      {
        path: "/Gallary",
        element: <Gallery></Gallery>,
      },
      {
        path: "/Academy",
        element: <Academy></Academy>,
      },
    ],
  },
]);
