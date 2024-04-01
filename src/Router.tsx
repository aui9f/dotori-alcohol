import { createBrowserRouter } from "react-router-dom";
import ModalUserSettings from "@/components/ModalUserSettings";
import Bookmark from "@/components/mypage/Bookmark";
import Layout from "@/Layout";
import HomeBrew from "@/pages/HomeBrew";
import Information from "@/pages/Information";
import Join from "@/pages/Join";
import Login from "@/pages/Login";
import MyPage from "@/pages/MyPage";
import Offline from "@/pages/Offline";
import ProtectedRoute from "./ProtectedRoutes";

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
        // element: <MyPage />,
        children: [
          {
            path: "",
            element: <Bookmark />,
          },
          // {
          //   path: "like",
          //   element: <Bookmark />,
          // },
          // {
          //   path: "/bookmark",
          //   element: <Bookmark />,
          // },
          {
            path: "off-line",
            element: <Bookmark />,
          },
          {
            path: "settings",
            element: <ModalUserSettings />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/join",
    element: <Join />,
  },
]);
export default Router;
