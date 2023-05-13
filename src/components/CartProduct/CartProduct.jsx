import React from 'react';
import styles from './cartproduct.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductFromCart } from '../../redux/cardSlice';

const CartProduct = () => {
    const products = useSelector(state => state.cart.productsCart);
    const dispatch = useDispatch();
    const handleDeleteClick = (productId) => {
        dispatch(deleteProductFromCart(productId))
    }
    
    return (
       <article>
        {products.map((product) => {
            return (
                <article className={styles.wrapper} key={product._id} >
                <img src={product.img} alt="product img" className={styles.img} />
                <p className={styles.name}>{product.title}</p>
                <p className={styles.price}>{product.price}</p>
                <p className={styles.quantity}>{product.quantity}</p>
                <p className={styles.subtotal}>{product.quantity * product.price}</p>
                <button onClick={() => handleDeleteClick(product._id)}><img src="images/delete-icon.png" alt="" />Remove</button>
            </article>
            )
        })}
       </article>
    );
};

export default CartProduct;