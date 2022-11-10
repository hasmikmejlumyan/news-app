import { Link } from 'react-router-dom'

// Styles
import styles from '../header.module.scss';


const Navigation = () => {
    return (
        <nav className={styles['navigation']}>
            <ul className={styles['navigation__menu']}>
                <li className={styles['navigation__menu-list']}>
                    <Link to={'/login'}>Log in</Link>
                </li>
                <li className={styles['navigation__menu-list']}>
                    <Link to={'/register'}>Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;