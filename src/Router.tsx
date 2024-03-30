import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomeBrew from "./pages/HomeBrew";
import Information from "./pages/Information";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Offline from "./pages/Offline";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomeBrew />,
      },
      {
        path: "/offline",
        element: <Offline />,
        // children: [
        //   {
        //     path: ":id",
        //     element: <Offline />,
        //   },
        // ],
      },
      {
        path: "/offline/:id",
        element: <Offline />,
      },
      {
        path: "/information",
        element: <Information />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default Router;
