import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AccountPage from './pages/AccountPage/AccountPage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import CartPage from './pages/CartPage/CartPage';



function MyRoutes() {
  return (
    <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/store'} element={<CatalogPage />} />
        <Route path={'/contacts'} element={<ContactPage />} />
        <Route path={'/auth'} element={<AccountPage />} />
        <Route path={'/product/:id'} element={<SingleProductPage/>} />
        <Route path={'/cart'} element={<CartPage />}/>
    </Routes>
  )
}

export default MyRoutes;