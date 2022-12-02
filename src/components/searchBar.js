import { useState } from "react";
import data from "../../data.json";

const SearchBar = ({ setmemberData }) => {
  // input search var
  let [searchValue, setsearchValue] = useState("");

  //   form submit method
  const formSubmit = (e) => {
    e.preventDefault();
    let filteredData = data.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
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
