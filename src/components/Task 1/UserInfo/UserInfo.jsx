import { Img, UserName, Tag, Location, DivCont } from './UserInfo.style';
import { AccountStats } from '../AccountStats/AccountStats';
import userData from '../user.json';

export const UserInfo = ({ info: { username, tag, location, avatar } }) => {
  return (
    <DivCont>
      <Img src={avatar} alt={tag} />
      <UserName>{username}</UserName>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
      <AccountStats data={userData} />
    </DivCont>
  );
};
