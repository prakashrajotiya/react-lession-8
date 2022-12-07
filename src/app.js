import ReactDOM from "react-dom/client";
import MemberList from "./components/MemberList";
import SearchBar from "./components/searchBar";
import "./app.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

const Main = () => {
  const [memberData, setmemberData] = useState([]);
  const [memberList, setmemberList] = useState([]);
  useEffect(() => {
    apiCall();
  }, []);
  console.log(Routes);

  async function apiCall() {
    const res = await fetch("https://api.github.com/users/prakashrajotiya");
    const res1 = await fetch(
      "https://api.github.com/users/prakash-ftxinfotech"
    );
    const res2 = await fetch("https://api.github.com/users/mohit");
    const data = await res.json();
    const data1 = await res1.json();
    const data2 = await res2.json();
    const result = [data, data1, data2];
    setmemberData(result);
    setmemberList(result);
  }
  return (
    <div className="main">
      <div className="searchbar">
        <SearchBar memberList={memberData} setmemberData={setmemberList} />
      </div>
      <div className="container">
        <div className="memberlist">
          <MemberList memberData={memberList} />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
