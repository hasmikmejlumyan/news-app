import { Link } from 'react-router-dom'

// Styles
import styles from '../Header/header.module.scss';

// logo
import logo from '../../../assets/images/logo.png';

// Components
import Navigation from './Navigation';


const Header = () => {
    return (
        <div className={styles['header-nav']}>
            <div className={styles['header-logo__box-content']}>
                <h1>
                    <Link to={'/homepage'}>
                        <img className={styles['header-logo__image']} src={logo} alt="logo" />
                        <span className={styles['header-logo__news']}>news</span>
                    </Link>
                </h1>
            </div>
            <Navigation />
        </div>
    )
}

export default Header;