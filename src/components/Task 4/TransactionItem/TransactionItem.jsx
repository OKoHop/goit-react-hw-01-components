import { TItems } from './TransactionItem.style';

export const TransactionItem = ({ item }) => {
  return (
    <>
      <TItems>{item.type}</TItems>
      <TItems>{item.amount}</TItems>
      <TItems>{item.currency}</TItems>
    </>
  );
};
