import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "../../App";
import LoginPage from "../../pages/login";
import MainPage from "../../pages/main";
import PublicPage from "../../pages/public";

createBrowserRouter([
  {
    path: "/",
    element: <App />,
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