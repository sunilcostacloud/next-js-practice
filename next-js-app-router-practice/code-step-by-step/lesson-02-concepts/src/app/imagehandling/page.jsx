import React from 'react'
import Profile from "../../../public/vercel.svg";
import imgs from "../assets/next-JS-framework.png"
import Image from 'next/image';

const ImageHandling = () => {
    return (
        <div>
            <h1>Image Handling</h1>
            <Image src={Profile} alt='image' />
            <img src={Profile.src} alt="image" />
            <Image src={imgs} alt='image' height={150} />
            <Image src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230202143636/NEXT-js-tutorial-1.png" alt="image" width={200} height={200} />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiIGGpVjbN-vyzQAhF3speW1jal_YXwDBnNW0CpX6XpAvyIbBpBveYaqiuj5XLhhEmgGw&usqp=CAU" alt="alt" />
        </div>
    )
}

export default ImageHandling