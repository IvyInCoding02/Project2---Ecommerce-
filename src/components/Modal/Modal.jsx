import React from "react";
import styles from "./modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/cardSlice";
import { Link } from "react-router-dom";

const Modal = () => {
  const products = useSelector(state => state.cart.productsCart);
  const dispatch = useDispatch();
  return (
        <div>
          {products.map((product) => {
            return (
              <div className={styles.wrapper}>
      <div className={styles.content}>
        <img
          src="/images/basket-close-icon.png"
          alt=""
          className={styles.close}
          onClick = {() => dispatch(closeModal()) }
        />
        <h2 className={styles.title}>Shopping Cart</h2>
        <div className={styles.line}></div>
        <div className={styles.products}>
          <div className={styles.product}>
            <img src={product.img} alt="product img" />
            <div className={styles.info}>
              <h5 className={styles.name}>{product.title}</h5>
              <p>{product.price}</p>
            </div>
            <img src="/images/close-icon.png" alt="" />
          </div>
        </div>
        <div className={styles.bottom}>
        <div className={styles.total}>
            <p className={styles.subtotal}>Subtotal</p> {product.quantity * product.price}
        </div>
        <div className={styles.line}></div>
            <Link to ="/cart" className={styles.link} onClick={() => dispatch(closeModal())}>View Cart</Link>
            <a href="/checkout" className={styles.link}>Checkout</a>
        </div>
      </div>
    </div>
            )
          })}
        </div>
    )
};

export default Modal;
