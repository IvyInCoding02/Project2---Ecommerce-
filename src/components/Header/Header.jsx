import React from 'react';
import styles from './header.module.css'
import Modal from '../Modal/Modal';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeClass = ({isActive}) => {
        return isActive ? `${styles.active} ${styles.link}` : styles.link;
    };
    return (
        <>
        <header>
            <div className={styles.wrapper} >
                <nav className={styles.nav}>
                    <NavLink to= "/" className={activeClass}>Home</NavLink>
                    <NavLink to="/auth" className={activeClass}>Account</NavLink>
                    <NavLink to="/store" className={activeClass}>Shop</NavLink>
                    <NavLink to="/contacts" className={activeClass}>Contacts</NavLink>
                </nav>
                <div className={styles.icons}>
                    <NavLink to={'/auth'} className={styles.icon}>
                        <img src="/images/profile-icon.png" alt="" className={styles.icon} />
                    </NavLink>
                    <p className={styles.icon}>
                        <img src="/images/search-icon.png" alt="" className={styles.icon} />
                    </p>
                    <p className={styles.icon}>
                        <img src="/images/favorite-icon.png" alt="" className={styles.icon} />
                    </p>
                    <NavLink to={'/cart'} className={styles.icon}>
                        <span className={styles.quantity}>1</span>
                        <img src="/images/basket-icon.png " alt="" className={styles.icon} />
                    </NavLink>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;