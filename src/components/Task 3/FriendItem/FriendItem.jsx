import { SpanStatus } from './FriendItem.style';

export const FriendItem = ({ item }) => {
  return (
    <>
      <SpanStatus isonline={item.isOnline.toString()}></SpanStatus>
      <img src={item.avatar} alt={item.name} width="48" />
      <p>{item.name}</p>
    </>
  );
};
