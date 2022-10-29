import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AppRouting from "../../AppRouting";
import LoginPage from "../../pages/login";
import MainPage from "../../pages/main";
import PublicPage from "../../pages/public";

createBrowserRouter([
  {
    path: "/",
    element: <AppRouting />,
    children: [
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "public",
        element: <PublicPage />
      },
      {
        path: "main",
        element: <MainPage />
      }
    ]
  }
]);