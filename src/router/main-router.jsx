import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home  from "../pages/Home";
import MainLayout from "../layout/main-layout";



const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      }
    ],
  },
]);

const MainRouter = () => {
  return <RouterProvider router={router} />;
};

export default MainRouter;