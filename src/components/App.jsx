import { UserInfo } from './Task 1/UserInfo';
import { AccountStats } from './Task 1/AccountStats';
import userData from '../user.json';
import { StatList } from './Task 2/StatList';
import statisticsData from '../data.json';
import { FriendList } from './Task 3/FriendList';
import friendsData from '../friends.json';
import { TransactionTable } from './Task 4/TransactionTable';
import transactionsData from '../transactions.json';

export const App = () => {
  return (
    <div>
      <UserInfo info={userData} />
      <AccountStats data={userData} />
      <StatList stats={statisticsData} />
      <FriendList list={friendsData} />
      <TransactionTable transList={transactionsData} />
    </div>
  );
};
