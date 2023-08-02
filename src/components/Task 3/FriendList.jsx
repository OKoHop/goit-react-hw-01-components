import { FriendItem } from './FriendItem';

export const FriendList = ({ list }) => {
  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <FriendItem item={item} />
        </li>
      ))}
    </ul>
  );
};
