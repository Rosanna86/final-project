import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import styled from "styled-components"

import "./App.css"

import ResponsiveAppBar from "./components/Navbar"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import ProductList from "./pages/ProductList"
import ProductDetails from "./pages/ProductDetails"
import AboutUs from "./pages/AboutUs"
import Footer from "./components/Footer"
import user from "./reducers/user"
import profile from "./reducers/profile"
import StartPage from "./pages/StartPage"
import { cartReducer } from './reducers/CartReducer';
import MyProfile from "./pages/MyProfile"
import MiniCartDrawer from "./components/MiniCartDrawer"



const Wrapper = styled.div`
  min-height: 100vh;
`

const reducer = combineReducers({
  user: user.reducer,
  profile: profile.reducer,
  cartReducer: cartReducer.reducer
})

const store = configureStore({ reducer })

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <ResponsiveAppBar />
          <MiniCartDrawer />
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/products" element={<ProductList />} >
              <Route path=":category" element={<ProductList />} />
            </Route>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
      <Footer />
    </Provider>
  )
}

export default App
