import axios from "axios";


// Get all products from API
const getProducts = () => {
    return axios.get('http://whispering-river-87788.herokuapp.com/api/products');
}

// Get only one product 
const getProduct = (id) => {
    return axios.get(`https://whispering-river-87788.herokuapp.com/api/product/${id}`);
}

export default {
    get: getProducts,
    getProduct: getProduct
}