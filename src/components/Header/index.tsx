import rocket from '../../assets/rocket.svg';

import styles from './styles.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={rocket}/>
            <strong>
                <span>to</span>
                <span>do</span>
            </strong>
        </header>
    )
}