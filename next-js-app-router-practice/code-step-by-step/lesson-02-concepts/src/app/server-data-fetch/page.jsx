import axios from 'axios'
import React from 'react'
import Product from './Product'

const productList = async () => {
    const { data } = await axios.get("https://dummyjson.com/products")
    return data.products
}

const ServerDataFetch = async () => {
    let products = await productList();
    // console.log(products)
    return (
        <div>
            <h1>ServerDataFetch</h1>
            <h2>Product List</h2>
            {products?.map((item) => (
                <div key={item.id}>
                    {item.title}
                    <Product price={item.price} />
                </div>
            ))}
        </div>
    )
}

export default ServerDataFetch