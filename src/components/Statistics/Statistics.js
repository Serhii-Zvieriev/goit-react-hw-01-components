import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';
import randomColor from 'randomcolor';

function Statistics({ title = '', stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage = 0 }) => (
          <li
            className={styles.item}
            key={id}
            style={{
              backgroundColor: randomColor(),
            }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistics;
