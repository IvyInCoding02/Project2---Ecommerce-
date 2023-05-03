import React from 'react';
import styles from './singleproductcard.module.css';
import productService from '../../services/products';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const SingleProductCard = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    productService
      .getProduct(id)
      .then((res) => {
        setSingleProduct(res.data);
      });
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles["img-wrapper"]}>
          <img src={singleProduct.img} alt="" />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{singleProduct.title}</h1>
          <p className={styles.price}>{singleProduct.price}</p>
          <p className={styles.descr}>{singleProduct.descr}</p>
          <div className={styles["control-wrapper"]}>
            <div className={styles.quantity}>
              <button className={styles["quantity-control"]}>-</button>
              <span>1</span>
              <button className={styles["quantity-control"]}>+</button>
            </div>
            <button className={styles.add}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;