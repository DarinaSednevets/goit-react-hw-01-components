
import styles from "./Profile.module.css"

const Profile = ({ avatar, name, tag, location, stats }) => {
    return (<div>
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    class="avatar"
                    className={styles.avatar}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li className={styles.statList}>
                    <span className={styles.statName}>Followers</span>
                    <span className={styles.statQuantity}>{stats.followers}</span>
                </li>
                <li className={styles.statList}>
                    <span className={styles.statName}>Views</span>
                    <span className={styles.statQuantity}>{stats.views}</span>
                </li>
                <li className={styles.statList}>
                    <span className={styles.statName}>Likes</span>
                    <span className={styles.statQuantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>


    </div>)
}
export default Profile;