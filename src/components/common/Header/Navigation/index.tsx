// Components
import Login from '../../../UI/Login';
import Registration from '../../../UI/Registration';

// Styles
import styles from '../header.module.scss';


const Navigation = () => {
    return (
        <nav className={styles['navigation']}>
            <ul className={styles['navigation__menu']}>
                <li className={styles['navigation__menu-list']}>
                    <Login />
                </li>
                <li className={styles['navigation__menu-list']}>
                    <Registration />
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;