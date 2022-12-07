import { useState } from "react";
import data from "../constant/data.json";

const SearchBar = ({ memberList, setmemberData }) => {
  // input search var
  let [searchValue, setsearchValue] = useState("");

  //   form submit method
  const formSubmit = (e) => {
    e.preventDefault();
    let filteredData = memberList.filter((item) =>
      item.login.toLowerCase().includes(searchValue.toLowerCase())
    );

    setmemberData(filteredData);
  };

  return (
    <form onSubmit={formSubmit} className="searchform">
      <input
        value={searchValue}
        onChange={(e) => {
          setsearchValue(e.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
};
export default SearchBar;
