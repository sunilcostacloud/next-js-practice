"use client"

import axios from "axios"
import { useEffect, useState } from "react"

const ProductList = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get("https://dummyjson.com/products")
            // console.log("data", data)
            setProduct(data?.products)
        }
        fetchData();
    }, [])
    return (
        <div>
            <h1>Product List</h1>
            {product?.map(item => <h3 key={item?.id} >{item?.title}</h3>)}
        </div>
    )
}

export default ProductList