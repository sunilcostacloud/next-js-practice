import axios from "axios";


const productList = async () => {
  const { data } = await axios.get("https://dummyjson.com/products")
  return data.products
}

const LoaderWithApi = async () => {
  let products = await productList();
  // console.log(products)
  return (
    <div>
      <h1>Loader With Api</h1>

      {products?.map((item) => (
        <div key={item.id}>
          {item.title}
        </div>
      ))}
    </div>
  )
}

export default LoaderWithApi