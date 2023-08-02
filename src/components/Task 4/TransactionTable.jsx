import { TableHead } from './TableHead';
import { TransactionItem } from './TransactionItem';

export const TransactionTable = ({ transList }) => {
  return (
    <table>
      <TableHead />
      <tbody>
        {transList.map(item => (
          <tr key={item.id}>
            <TransactionItem item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
