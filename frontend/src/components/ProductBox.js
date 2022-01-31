import React from "react";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { API_URL } from '../utils/urls'


const ProductBox = ({ product }) => {
const handleAddToCartClick = (event) => {
console.log(event)

const options = {
    method: 'POST',
    headers: {
        cartId: localStorage.getItem("cartId"), //here we fetch cartID from localStorage
    },
};

fetch ( API_URL('cart/add-item?itemId=' + product.productId),options) //option is needed otherwise is going to be getMetod
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
}

    return (<>
        <img src={product.img1} height={300} alt="product"></img>
        <br />
        {product.productName} £{product.price}
        <br></br>
        <Button 
        variant="outlined" 
        color="primary" 
        endIcon={<AddShoppingCartIcon />}
        onClick={()=> handleAddToCartClick(product)}
        >
        Buy
      </Button>
    </>);

};

export default ProductBox;