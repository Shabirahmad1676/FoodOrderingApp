import { Redirect } from "expo-router";
import React, { createContext, useContext, useState } from "react";

export const cartContext = createContext({
    items: [],
    addItem: () => {},
    increment: () => {},
    decrement: () => {},
    total:0,
    message: "",
    clearMessage: () => {},
});

const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [message, setMessage] = useState("");

    // Add item to cart (product and size)
    const addItem = (product, size) => {

        const exists = items.some(item => item.product_id === product.id && item.size=== size );

        if (exists) {
           setMessage("Already Added")
        }


        const newCartItem = {
            id: '1',
            size,
            quantity: 1,
            product_id: product.id,
            product
        };
        setItems([newCartItem, ...items]);
        setMessage(""); // Clear message on successful add
    };

    const increment = (productId, size) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.product_id === productId && item.size === size
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decrement = (productId, size) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.product_id === productId && item.size === size
                    ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                    : item
            )
        );
    };

    const clearMessage = () => setMessage("");

    //total price
const total = items.reduce((sum, item) => sum + (parseFloat(item.product.price) * item.quantity),0);

    return (
        <cartContext.Provider value={{ items, addItem, decrement, increment, message, clearMessage,total }}>
            {children}
        </cartContext.Provider>
    );
};

export default CartProvider;

// Custom hook for cart context
export const useCart = () => useContext(cartContext);