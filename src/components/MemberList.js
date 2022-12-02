import MemberCard from "./membercard";

const MemberList = (props) => {
  const memberList = props.memberData.map((member) => {
    return (
      <div className="col" key={member.id}>
        <MemberCard member={member} />
      </div>
    );
  });
  return memberList;
};
export default MemberList;
