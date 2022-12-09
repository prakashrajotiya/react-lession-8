import MemberCard from "./membercard";
import { NavLink } from "react-router-dom";
const MemberList = (props) => {
  console.log(props);
  if (props.memberData.length > 0) {
    const memberList = props.memberData.map((member) => {
      return (
        <div className="col" key={member.id}>
          <NavLink to={`/member/${member.login}`}>
            <MemberCard member={member} />
          </NavLink>
        </div>
      );
    });
    return memberList;
  } else {
    return <div>Not data found</div>;
  }
};
export default MemberList;
