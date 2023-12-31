import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.friendlist}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
