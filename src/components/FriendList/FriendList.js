import PropTypes from "prop-types";
import styles from "./FriendList.module.css"

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>{
            friends.map((friend) =>
                <li className={styles.item}>
                    <span className={styles.status} style={{ backgroundColor: friend.isOnline ? "green" : "red" }}></span>
                    <img className={styles.avatar} src={friend.avatar} alt="аватар пользователя" width="48" />
                    <p className={styles.name}>{friend.name}</p>
                </li>)}
        </ul>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired
    ),
};

export default FriendList;