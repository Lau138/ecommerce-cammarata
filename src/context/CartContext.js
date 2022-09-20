import React from 'react';
import { useState, createContext, useContext } from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [productCartList, setProductCartList] = useState([])

    const addItem = (item, quantity) => {
        const newProduct = {
            ...item,
            quantity
        }
        if (isInCart(item.id)) {
            const productPos = productCartList.findIndex(product => product.id === item.id);
            const newArray = [...productCartList];
            newArray[productPos].quantity = newArray[productPos].quantity + quantity;
            setProductCartList(newArray)
        } else {
            const newArray = [...productCartList];
            newArray.push(newProduct);
            setProductCartList(newArray);
        }
    }

    const removeItem = (itemId) => {
        const newArray = productCartList.filter(item => item.id !== itemId)
        setProductCartList(newArray)
    }

    const clear = () => {
        setProductCartList([])
    }

    const isInCart = (productId) => {
        const productExist = productCartList.some(item => item.id === productId)
        return productExist;
    }

    return (
        <CartContext.Provider value={{ productCartList, addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}