import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomeBrew from "./pages/HomeBrew";
import Information from "./pages/Information";
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
]);
export default Router;
