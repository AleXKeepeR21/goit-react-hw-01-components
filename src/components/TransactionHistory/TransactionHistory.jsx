import PropTypes from 'prop-types';
import style from '../TransactionHistory/TransactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem';

export default function TransactionHistory({ items }) {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          ></TransactionHistoryItem>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistoryItem.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
    })
  ),
};
