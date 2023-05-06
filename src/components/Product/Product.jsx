import React from 'react';
import styles from './product.module.css';
import { Link } from 'react-router-dom';


const Product = ({ title, img, price, date, id, gridView}) => {
   
    return (
        <div className={gridView ? styles.card : styles["card-list"]}>
            <Link to={ `/product/${id}`}><img src={img} alt="img" className={styles.img} /></Link>
            <div className={styles.info}>
                <a href="/" className={styles.name}>
                {title}
                </a>
                <h4 className={styles.price}>
                    {price}
                </h4>
                <p>{new Date(date).toString("Ru")}</p>
            </div>
        </div>
    );
};

export default Product;