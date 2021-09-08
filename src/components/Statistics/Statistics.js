import PropTypes from 'prop-types';
import styles from "./Statistics.module.css"

const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>Upload stats</h2>}

            {/* проверка на наличие данных в заголовке, именно в этой строке заголовок,
            который зарендерится, а данные в апп только проверка, там может быть что угодно */}

            <ul className={styles.statList}>{
                stats.map((item) =>
                    <li className={styles.item} style={{ backgroundColor: randomColor() }}>
                        <span className={styles.label}>{item.label} </span>
                        <span className={styles.percentage}>{item.percentage + "%"}</span>
                    </li>)
            }
            </ul>
        </section>
    )
}

Statistics.defaultProps = {
    title: null,
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
                stats: PropTypes.number.isRequired
            }
        )
    ).isRequired,
};

export default Statistics;

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}