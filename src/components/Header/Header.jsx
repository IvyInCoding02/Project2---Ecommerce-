import React from 'react';
import styles from './header.module.css'
import Modal from '../Modal/Modal';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/cardSlice';

const Header = () => {
    const isOpen = useSelector(state => state.cart.isOpen);
    const cartQuantity = useSelector(state => state.cart.quantityCart)
    const dispatch = useDispatch(); 
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
                    <div className={styles.icon}>
                        { cartQuantity > 0 && <span className={styles.quantity}>{cartQuantity > 0 && cartQuantity}</span>}
                        <img src="/images/basket-icon.png " 
                        alt="cart-icon" className={styles.icon}
                        onClick={() => {
                            if(cartQuantity !== 0){
                                dispatch(openModal());
                            }
                        }} />
                    </div>
                </div>
                { isOpen && <Modal/> }
            </div>
        </header>
        </>
    );
};

export default Header;