import { UserInfo } from './Task 1/UserInfo/UserInfo';
import userData from '../data/user.json';
import { StatList } from './Task 2/StatList/StatList';
import statisticsData from '../data/data.json';
import { FriendList } from './Task 3/FriendList/FriendList';
import friendsData from '../data/friends.json';
import { TransactionTable } from './Task 4/TransactionTable/TransactionTable';
import transactionsData from '../data/transactions.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <UserInfo info={userData} />
      <StatList stats={statisticsData} title="Upload stats" />
      <FriendList list={friendsData} />
      <TransactionTable transList={transactionsData} />
      <GlobalStyle />
    </div>
  );
};
