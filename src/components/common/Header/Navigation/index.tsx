import { Link } from 'react-router-dom'

// Components
import Login from '../../../UI/Login';

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
                    <Link to={'/homepage/?query=register'}>Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;