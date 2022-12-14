import { createBrowserRouter } from "react-router-dom";
import CourseLayout from "../components/Layout/CourseLayout";
import MainLayout from "../components/Layout/MainLayout";
import MainCourse from "../components/MainCourse";
import PrivetRoute from "../components/PrivetRoute";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import DetailsPage from "../pages/DetailsPage";
import Error from "../pages/Error";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Purchase from "../pages/Purchase";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <CourseLayout></CourseLayout>,
        children: [
          {
            path: "/courses",
            element: <MainCourse></MainCourse>,
          },
          {
            path: "/courses/:id",
            element: <DetailsPage></DetailsPage>,
            loader: ({ params }) =>
              fetch(
                `https://web-dev-course-server.vercel.app/courses/${params.id}`
              ),
          },
        ],
      },

      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/purchase/:id",
        loader: ({ params }) =>
          fetch(
            `https://web-dev-course-server.vercel.app/courses/${params.id}`
          ),
        element: (
          <PrivetRoute>
            <Purchase></Purchase>
          </PrivetRoute>
        ),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
