import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item}>
      {friend.isOnline === true ? (
        <span className={css.status_online}></span>
      ) : (
        <span className={css.status_offline}></span>
      )}

      <img
        className={css.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default FriendListItem;
