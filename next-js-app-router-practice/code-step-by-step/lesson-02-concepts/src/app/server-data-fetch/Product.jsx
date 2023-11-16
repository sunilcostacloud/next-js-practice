"use client"

const Product = (props) => {
    console.log("button", props.price)
    return (
        <div>
            <button onClick={() => alert(props.price)}>Click Me</button>
        </div>
    )
}

export default Product