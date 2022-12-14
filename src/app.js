import ReactDOM from "react-dom/client";
import AboutUs from "./components/About";
import MemberDetail from "./components/memberDetail";
import Header from "./components/Header";
import Search from "./components/Member";
import Home from "./components/Home";
import "./app.css";
import Profile from "./components/Profile";
import { Outlet } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "", element: <Home /> },
      { path: "search", element: <Search /> },
      { path: "member/:login", element: <MemberDetail /> },
      {
        path: "about",
        element: <AboutUs />,
        children: [
          {
            path: "",
            element: <Profile name={"Prakash Kumar"} />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
