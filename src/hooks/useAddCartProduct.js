import {  useState } from "react";


const useAddCartProduct = () => {
    const [cart, setCart] = useState([]);

    // useEffect(() => {
    //     const data = localStorage.getItem('cart');

    //     if (!data) {
    //         localStorage.setItem('cart', []);
    //     } else {
    //         setCart(data);
    //     }
    // }, []);
    return cart, setCart;
}

export default useAddCartProduct;