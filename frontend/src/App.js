import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import styled from "styled-components"

import "./App.css"

import {v4 as uuidv4 } from "uuid"

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
import MyProfile from "./pages/MyProfile"

const Wrapper = styled.div`
  min-height: 100vh;
`

const reducer = combineReducers({
	user: user.reducer,
	profile: profile.reducer,
})

const store = configureStore({ reducer })

function App() {

  useEffect(() => { //here we generate a unique cartID if it doesn't already exist - save to localStorage
    if (localStorage.getItem("cartId"))
    return
    localStorage.setItem("cartId", uuidv4());
    }, []);

  return (
    <Provider store={store}> 
      <BrowserRouter>
        <Wrapper>
          <ResponsiveAppBar />
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/my-profile" element={<MyProfile />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </Wrapper>
      </BrowserRouter>
      <Footer />
    </Provider>
  )
}

export default App
