import PropTypes from 'prop-types';
import styles from './SocialProfile.module.scss';

function SocialProfile({
  obj: {
    avatar,
    name,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={name} className={styles.avatar} width="160" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

SocialProfile.defaultProps = {
  obj: { stats: { followers: 0, views: 0, likes: 0 } },
};

SocialProfile.prototype = {
  obj: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          followers: PropTypes.number.isRequired,
          views: PropTypes.number.isRequired,
          likes: PropTypes.number.isRequired,
        }),
      ),
    }),
  ),
};

export default SocialProfile;
