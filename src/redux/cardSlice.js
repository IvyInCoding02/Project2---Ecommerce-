import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "cart",
     initialState: {
        quantityCart: 0,
        productsCart: [],
        isOpen: false
     },
     reducers: {
        addToCart: (state, action) => {
         state.isOpen = true; 
         const indexProduct = state.productsCart.findIndex(product => product._id === action.payload._id)
         if(indexProduct === -1){
            // action made when there is no product in the cart 
            state.productsCart.push(action.payload)
            state.quantityCart++
         } else {
            // action made when a product already exists and we want to make an addition to the quantityt of the product
            state.productsCart[indexProduct].quantity += action.payload.quantity
         }
        },

        deleteProductFromCart: (state,action) => {
         state.productsCart = state.productsCart.filter((p) => p._id !== action.payload)
        }, 

        closeModal: (state) => {
         state.isOpen = false;
        }, 

        openModal: (state) => {   
         state.isOpen = true;
        }
     }
})

export const { addToCart, deleteProductFromCart , closeModal, openModal} = cardSlice.actions;
export default cardSlice.reducer;