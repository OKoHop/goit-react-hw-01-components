export const FriendItem = ({ item }) => {
  return (
    <>
      <span>{item.isOnline}</span>
      <img src={item.avatar} alt={item.name} />
      <p>{item.name}</p>
    </>
  );
};
