
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.table}>
            <thead className={styles.th} >
                <tr >
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>{
                items.map((item) =>
                    <tr className={styles.tr} key={item.id}>
                        <td >{item.type}</td>
                        <td >{item.amount}</td>
                        <td > {item.currency}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}


export default TransactionHistory;
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}