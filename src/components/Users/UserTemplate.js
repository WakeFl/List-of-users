import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './UserTemplate.module.css'

const UserTemplate = ({ clue, value, icon }) => {

    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={icon} className={styles.icon} />
            <div>
                <h3>
                    {value}
                </h3>
                <span>
                    {clue}
                </span>
            </div>
        </div>
    )
}
export default UserTemplate