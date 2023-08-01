import { UserInfo } from './UserInfo';
import { AccountStats } from './AccountStats';
import userData from '../user.json';

export const App = () => {
  return (
    <div>
      <UserInfo info={userData} />
      <AccountStats data={userData} />
    </div>
  );
};
