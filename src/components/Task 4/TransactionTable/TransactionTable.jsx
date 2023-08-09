import { TableHead } from '../TableHead/TableHead';
import { TransactionItem } from '../TransactionItem/TransactionItem';
import { Table } from './TransactionTable.style';

export const TransactionTable = ({ transList }) => {
  return (
    <Table>
      <TableHead />
      <tbody>
        {transList.map(item => (
          <tr key={item.id}>
            <TransactionItem item={item} />
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
