import ReactDOM from "react-dom/client";
import MemberList from "./components/MemberList";
import SearchBar from "./components/searchBar";
import data from "../data.json";
import "./app.css";
import { useEffect, useState } from "react";

const Main = () => {
  const [memberData, setmemberData] = useState(data);
  useEffect(() => {
    apiCall();
  });

  async function apiCall() {
    const res = await fetch("https://api.github.com/users/prakashrajotiya");
    console.log("res", res);
    const data = await res.json();
    console.log("data", data);
    console.log(data);
  }
  return (
    <div className="main">
      <div className="searchbar">
        <SearchBar setmemberData={setmemberData} />
      </div>
      <div className="container">
        <div className="memberlist">
          <MemberList memberData={memberData} />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
