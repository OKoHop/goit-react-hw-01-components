import { UserInfo } from './Task 1/UserInfo/UserInfo';
import userData from './Task 1/user.json';
import { StatList } from './Task 2/StatList';
import statisticsData from '../data.json';
import { FriendList } from './Task 3/FriendList';
import friendsData from '../friends.json';
import { TransactionTable } from './Task 4/TransactionTable';
import transactionsData from '../transactions.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <UserInfo info={userData} />
      <StatList stats={statisticsData} />
      <FriendList list={friendsData} />
      <TransactionTable transList={transactionsData} />
      <GlobalStyle />
    </div>
  );
};
