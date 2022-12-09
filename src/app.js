import ReactDOM from "react-dom/client";
import MemberList from "./components/MemberList";
import SearchBar from "./components/searchBar";
import AboutUs from "./components/About";
import MemberDetail from "./components/memberDetail";
import "./app.css";
import { useEffect, useState, Outlet } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
} from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">Home</NavLink> &nbsp;
      <NavLink to="/search">Search</NavLink>
    </header>
  );
};
const Search = () => {
  const [memberData, setmemberData] = useState([]);
  const [memberList, setmemberList] = useState([]);
  useEffect(() => {
    apiCall();
    allapiCall();
  }, []);
  // console.log(Routes);
  async function allapiCall() {
    const res = await Promise.all([
      fetch("https://api.github.com/users/dinesh"),
      fetch("https://api.github.com/users/suresh"),
      fetch("https://api.github.com/users/rahul"),
    ]);
    const result = [
      await res[0].json(),
      await res[1].json(),
      await res[2].json(),
    ];
  }
  async function apiCall() {
    const res = await fetch("https://api.github.com/users/dinesh");
    const res1 = await fetch("https://api.github.com/users/suresh");
    const res2 = await fetch("https://api.github.com/users/rahul");
    const data = await res.json();
    const data1 = await res1.json();
    const data2 = await res2.json();
    const result = [data, data1, data2];
    setmemberData(result);
    setmemberList(result);
  }
  return (
    <>
      <SearchBar memberList={memberData} setmemberData={setmemberList} />
      <div className="memberlist">
        <MemberList memberData={memberList} />
      </div>
    </>
  );
};
const Home = () => {
  return <h1>This is Home Page</h1>;
};
const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <Header />
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
    ],
  },

  {
    path: "/about",
    element: <AboutUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
