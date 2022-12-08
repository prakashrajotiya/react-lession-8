import ReactDOM from "react-dom/client";
import MemberList from "./components/MemberList";
import SearchBar from "./components/searchBar";
import AboutUs from "./components/About";
import MemberDetail from "./components/memberDetail";
import "./app.css";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="searchbar">
      <SearchBar
        memberList={props.memberData}
        setmemberData={props.setmemberList}
      />
    </div>
  );
};
const Search = (props) => {
  return (
    <div className="memberlist">
      <MemberList memberData={props.memberList} />
    </div>
  );
};
const Main = () => {
  const [memberData, setmemberData] = useState([]);
  const [memberList, setmemberList] = useState([]);
  useEffect(() => {
    apiCall();
  }, []);
  // console.log(Routes);

  async function apiCall() {
    const res = await fetch("https://api.github.com/users/prakashrajotiya");
    const res1 = await fetch(
      "https://api.github.com/users/prakash-ftxinfotech"
    );
    const res2 = await fetch("https://api.github.com/users/rahul");
    const data = await res.json();
    const data1 = await res1.json();
    const data2 = await res2.json();
    const result = [data, data1, data2];
    setmemberData(result);
    setmemberList(result);
  }
  return (
    <div className="main">
      <div className="container">
        <Header memberData={memberData} setmemberList={setmemberList} />
        <Outlet />
        {/* <Search memberList={memberList} /> */}
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "home", element: <Search /> },
      { path: "member", element: <MemberDetail /> },
    ],
  },
  // {
  //   path: "/about",
  //   element: <AboutUs />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
