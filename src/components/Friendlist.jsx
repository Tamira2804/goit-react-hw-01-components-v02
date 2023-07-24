import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="item">
          <FriendListItem avatar={friend.avatar} name={friend.name} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
  friend: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default FriendList;
