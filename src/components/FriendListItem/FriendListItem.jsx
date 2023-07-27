import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  return (
    <>
      <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
