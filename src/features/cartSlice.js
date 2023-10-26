import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === newItem.id)
            
            if(!existingItem) {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    cartQuantity: newItem.quantity,
                    totalPrice: newItem.price,
                    img: newItem.img,
                    name: newItem.name
                })
                localStorage.setItem("cartItems", JSON.stringify(state.itemsList))
                toast.success(`${newItem.name} added to the cart.`)
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === id)

            if(existingItem) {
                state.itemsList = state.itemsList.filter((item) => item.id !== id)
                localStorage.setItem("cartItems", JSON.stringify(state.itemsList))
                //toast.success(`${existingItem.name} removed from the cart.`)
            }
        },
        incrementCartQuantity(state, action) {
            const {id, quantityField} = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === id)

            if(existingItem){
                existingItem.quantity += quantityField;
                existingItem.totalPrice += (existingItem.price * quantityField);
                state.totalPrice += existingItem.totalPrice
            }
        },
        decrementCartQuantity(state, action) {
            const {id, quantityField} = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === id)

            if(existingItem.quantity <= 1) {
                existingItem.quantity = 1;
            } else if(existingItem.quantity > quantityField) {
                existingItem.quantity -= quantityField;
                existingItem.totalPrice -= (existingItem.price * quantityField);
            }
        },
        setShowCart(state, action) {
            state.showCart = !state.showCart
        }
    }
})

export const { addToCart, removeFromCart, decrementCartQuantity, incrementCartQuantity, setShowCart } = cartSlice.actions;

export const selectItems = (state) => state.cart?.itemsList;
export const selectShowCart = (state) => state.cart?.showCart;

export default cartSlice.reducer