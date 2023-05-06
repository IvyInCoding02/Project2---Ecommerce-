import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Filter from '../../components/Filter/Filter';
import Info from '../../components/Info/Info';
import Product from '../../components/Product/Product';
import styles from './catalogpage.module.css';
import productService from '../../services/products';
import ReactPaginate from 'react-paginate';


const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [sorted, setSorted] = useState("price");
  const [productOffset, setProductOffset] = useState(0);
  const [gridView, setGridView] = useState(true);
  const [forcePage, setForcePage] = useState(0);


  const productsPerPage = 4;
  const endOffset = productOffset + productsPerPage;
  console.log(`Loading items from ${productOffset} to ${endOffset}`);
  const currentProducts = products.slice(productOffset, endOffset); // products.slice(0,4) => [0,1,2,4]
  const pageCount = Math.ceil(products.length / productsPerPage); //Amount of pages



  const handlePageClick = (event) => {
    const newOffset = event.selected * productsPerPage;
    setProductOffset(newOffset);
    setForcePage(event.selected)
  };

  useEffect(() => {
    productService
    .get()
    .then(res => {
     const sortedProducts = res.data.sort((a,b) => a.price -b.price)
     setProducts(sortedProducts)
    })
    .catch(err => console.log(err.res.data))
  
  }, []);

  useEffect(() => {
    if(sorted === "priceAsc"){
    const sortedProducts = [...products].sort((a,b) => a.price -b.price)
    setProducts(sortedProducts)
    }

    if(sorted === "newestAsc") {
      const sortedProducts = [...products].sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt))
      setProducts(sortedProducts)
    }

    if(sorted === "priceDesc"){
      const sortedProducts = [...products].sort((a,b) => b.price -a.price)
      setProducts(sortedProducts)
    }

    if(sorted === "newestDesc") {
      const sortedProducts = [...products].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
      setProducts(sortedProducts)
    }
    setForcePage(0)
    setProductOffset(0)
  }, [sorted])


  return (
    <div>
      <Breadcrumbs  />
      <Filter setSorted={setSorted} sorted={sorted} setGridView={setGridView}/>
      <div className={styles["products-wrapper"]}>
        { currentProducts.map(product => {
          return <Product
          key={product._id}
          title={product.title}
          img={product.img}
          price={product.price}
          date={product.createdAt}
          id={product._id}
          gridView={gridView}/>
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName={styles["pagination-wrapper"]}
        pageLinkClassName={styles["pagination-page"]}
        nextClassName={styles["pagination-next"]}
        activeLinkClassName={styles["pagination-active"]}
        forcePage={forcePage}
      />
      <Info />
    </div>
  );
};

export default CatalogPage;

// Create an additional option that shows from  cheap to expensive
//Create an option that shows from newest to oldest 