import { useState } from "react";


const useData = () => {
    const [cart, setCart] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [addedToCart, setAddedToCart] = useState(false)

    return [
        cart,
        setCart,
        subTotal,
        setSubTotal,
        total,
        setTotal,
        total,
        setTotal,
        addedToCart,
        setAddedToCart,
        discount,
        setDiscount
    ]
}

export default useData;