import SearchBar from "./searchBar";
import MemberList from "./MemberList";
import { useEffect, useState } from "react";
const Search = () => {
  const [memberData, setmemberData] = useState([]);
  const [memberList, setmemberList] = useState([]);
  useEffect(() => {
    apiCall();
    // allapiCall();
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
export default Search;
