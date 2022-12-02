const MemberCard = (props) => {
  const { avatar, name, designation } = props.member;
  return (
    <div className="membercard">
      <img src={avatar} />
      <div className="membercard-info">
        <h2>{name}</h2>
        <p>{designation}</p>
      </div>
    </div>
  );
};
export default MemberCard;
