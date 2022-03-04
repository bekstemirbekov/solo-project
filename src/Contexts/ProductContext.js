import axios from 'axios';


import React, { createContext, useEffect, useReducer, useState } from 'react';


import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import { auth } from '../Firebase.js';
import { API } from '../Helpers/Constans.js';
import { calcSubPrice, calcTotalPrice } from '../Helpers/CalcPrise.js';


export const productContext = createContext()
const INIT_STATE = {
    products: null,
    edit: null,
    cart: {}, 
    cartLength: 0,
    star: {},
    starLength: 0,
    paginatedPages: 1,
    detail: {}
}
 const reduser = (state= INIT_STATE, action) => {
     switch(action.type){
         case 'GET_PRODUCTS':
         return {...state, products: action.payload.data, 
            paginatedPages: Math.ceil(action.payload.headers["x-total-count"] / 3)
        }
         case 'GET_EDIT_PRODUCT':
         return{...state, edit: action.payload}
         case "CHANGE_CART_COUNT":
             return{...state, cartLength: action.payload}
         case "GET_CART":
             return {...state, cart: action.payload}
        case "GET_DETAIL_PRODUCT":
            return{...state, detail: action.payload}
        case "СHANGE_STAR_COUNT":
        return{...state, starLength: action.payload}
        case "GET_STAR":
            return{...state, star: action.payload}
         default:
             return state
     }
 }

const ProductsContextProvider = ({children}) => {
    const [state, dispatch] =useReducer(reduser, INIT_STATE)

    
    //! CREATE
    const addProduct = async (newProduct) => {
        console.log(newProduct, 'hello')

        try {
            await axios.post(API, newProduct)
            getProducts()
        } catch (error) {
            alert(error)
        }
    }



// !READ
    const getProducts = async () => {
        try {
            let res = await axios(`${API}${window.location.search}`)
            let action = {
                type: 'GET_PRODUCTS',
                payload: res
            }
            dispatch(action)
        } catch (error) {
            alert(error)
        }
    }
    // ! DELETE 
    const deleteProduct = async (id) => {
        await axios.delete(`${API}/${id}`)
        getProducts()
    }

    // !EDIT  PRODUCT
    const editProduct = async (id) => {
        try {
            let res = await axios(`${API}/${id}`)
            let action = {
                type: 'GET_EDIT_PRODUCT',
                payload: res.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
    // ! SAVE EDITED PRODUCT
    const saveEditedProduct = async (updatedProduct) => {
        try {
            await axios.patch(`${API}/${updatedProduct.id}`, updatedProduct)
            getProducts()
        } catch (error) {
            console.log(error);
        }
    }

    // ! ADD TO CART FUNCTION

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0
        }

        let filteredCart = chekProductInCart(product.id)
        if(filteredCart === true) {
            cart.products = cart.products.filter(elem => elem.item.id !== product.id )
        }
        else{
            cart.products.push(newProduct)
        }


        newProduct.subPrice = calcSubPrice(newProduct)
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({
            type: 'CHANGE_CART_COUNT',
            payload: cart.products.length
        })
    }


    // ! Считает количество продуктов в корзине нижняя функция

    const getCartLength = () => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: 'CHANGE_CART_COUNT',
            payload: cart.products.length 
        })
    }

    // !для стягивания и отображения данных с корзины
        const getCart = () => {
            let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: 'GET_CART',
            payload: cart
        })
        }

        const changeProductCount = (count,id) => {
            let cart = JSON.parse(localStorage.getItem('cart'));
            cart.products = cart.products.map(elem => {
                if(elem.item.id === id){
                    elem.count = count >= 0 ? count : 0
                    elem.subPrice = calcSubPrice(elem)
                }
                // if(elem.item.id !== id){
                //     return elem
                // }
                return elem
            })
            cart.totalPrice = calcTotalPrice(cart.products)
            localStorage.setItem('cart', JSON.stringify(cart))
            getCart()
        }

        // ! DELETEPRODUCTINCART
        const deleteProductInCart = (id) => {
            let toDelete = JSON.parse(localStorage.getItem('cart'));
            toDelete.products =toDelete.products.filter(
                (elem) => elem.item.id !== id
            );
            localStorage.setItem('cart', JSON.stringify(toDelete))
            getCart()
            dispatch({
                type: "CHANGE_CART_COUNT",
                payload: toDelete.products.length
            })
        }
    // ! CHECK PRODUCT IN CART

    const chekProductInCart = (id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart) {
            cart= {
                products: [],
                totalPrice: 0
            }
        }
        let newCart = cart.products.filter(elem => elem.item.id === id)
        // console.log(newCart);
        return newCart.length = 0 ? true : false
    }

// ------------------------------------------------------------------------------------------------------
      // ! FAVORITES
      const addToStar = (product) => {
        let star = JSON.parse(localStorage.getItem('star'));
        if(!star) {
            star = {
                products: [],
            }
        }
        let newProduct = {
            item: product,
            count: 1,
        }

        let filteredStar = chekProductInStar(product.id)
        if(filteredStar === true) {
            star.products = star.products.filter(elem => elem.item.id !== product.id )
        }
        else{
            star.products.push(newProduct)
        }


        // newProduct.subPrice = calcSubPrice(newProduct)
        // cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('star', JSON.stringify(star))
        dispatch({
            type: 'CHANGE_STAR_COUNT',
            payload: star.products.length
        })
    }

      const getStarLength = () => {
        let star = JSON.parse(localStorage.getItem('star'));
        if(!star) {
            star = {
                products: [],
                
                
            }
        }
        dispatch({
            type: 'CHANGE_STAR_COUNT',
            payload: star.products.length 
        })
    }

   

    // !для стягивания и отображения данных с корзины
        const getStar = () => {
            let star = JSON.parse(localStorage.getItem('star'));
        if(!star) {
            star = {
                products: [],
                
            }
        }
        dispatch({
            type: 'GET_STAR',
            payload: star
        })
        }

        const chekProductInStar = (id) => {
            let star = JSON.parse(localStorage.getItem('star'))
            if(!star) {
                star= {
                    products: [],
                }
            }
            let newStar = star.products.filter(elem => elem.item.id === id)
            // console.log(newCart);
            return newStar.length = 0 ? true : false

        }

               // ! DELETEPRODUCTINstar
               const deleteProductInStar = (id) => {
                let toDelete = JSON.parse(localStorage.getItem('star'));
                toDelete.products =toDelete.products.filter(
                    (elem) => elem.item.id !== id
                );
                localStorage.setItem('star', JSON.stringify(toDelete))
                getStar()
                dispatch({
                    type: "CHANGE_STAR_COUNT",
                    payload: toDelete.products.length
                })
            }
    //------------------------------------------------------------------------------------------------------ 

    // ! get detail

    const getDetail = async (id) => {
        const res = await axios(`${API}/${id}`)
        let action = {
            type: "GET_DETAIL_PRODUCT",
            payload: res.data
        }
        dispatch(action)
    }

    // !SIGN IN/ SIGN UP
    function signUp (email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signIn (email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout () {
        return signOut(auth)
    }

    function useAuth() {
        const [currentUser, setCurrentUser] = useState()

        useEffect(() => {
            const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
            return unsub
        }, [])

        return currentUser
    }


    return (
        <productContext.Provider value={{
            addProduct,
            getProducts,
            deleteProduct,
            editProduct,
            saveEditedProduct,
            addToCart,
            chekProductInCart,
            getCartLength,
            getCart,
            changeProductCount,
            getDetail,
            signUp,
            signIn,
            logout,
            useAuth,
            deleteProductInCart,
            addToStar,
            getStarLength,
            getStar,
            chekProductInStar,
            deleteProductInStar,
            edit: state.edit,
            products: state.products,
            cartLength: state.cartLength,
            cart: state.cart,
            paginatedPages: state.paginatedPages,
            starLength: state.starLength,
            star: state.star,
            detail: state.detail
        }}>
            {children}
        </productContext.Provider>
    );
};

export default ProductsContextProvider;