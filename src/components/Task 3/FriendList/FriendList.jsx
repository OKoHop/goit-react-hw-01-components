import { FriendItem } from '../FriendItem/FriendItem';
import { Item, List } from './FriendList.style';

export const FriendList = ({ list }) => {
  return (
    <List>
      {list.map(item => (
        <Item key={item.id}>
          <FriendItem item={item} />
        </Item>
      ))}
    </List>
  );
};
