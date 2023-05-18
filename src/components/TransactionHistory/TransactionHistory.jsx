import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead className={css.thead}>
        <tr className={css.thead_tr}>
          <th className={css.thead_th}>Type</th>
          <th className={css.thead_th}>Amount</th>
          <th className={css.thead_th}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.tbody_tr} key={id}>
              <td className={css.tbody_td}>{type}</td>
              <td className={css.tbody_td}>{amount}</td>
              <td className={css.tbody_td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
