import ReactDOM from "react-dom/client";
import MemberList from "./components/MemberList";
import SearchBar from "./components/searchBar";
import data from "../data.json";
import "./app.css";
import { useEffect, useState } from "react";

const Main = () => {
  const [memberData, setmemberData] = useState([]);
  const [memberList, setmemberList] = useState([]);
  useEffect(() => {
    apiCall();
  }, []);

  async function apiCall() {
    const res = await fetch("https://api.github.com/users/prakashrajotiya");
    const res1 = await fetch(
      "https://api.github.com/users/prakash-ftxinfotech"
    );
    const data = await res.json();
    const data1 = await res1.json();
    const result = [data, data1];
    setmemberData(result);
  }
  return (
    <div className="main">
      <div className="searchbar">
        <SearchBar memberList={memberData} setmemberData={setmemberList} />
      </div>
      <div className="container">
        <div className="memberlist">
          <MemberList
            memberData={memberList.length ? memberList : memberData}
          />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
