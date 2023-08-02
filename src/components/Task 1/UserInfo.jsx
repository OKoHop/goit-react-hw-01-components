export const UserInfo = ({ info: { username, tag, location, avatar } }) => {
  return (
    <div>
      <img src={avatar} alt={tag} />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
  );
};
