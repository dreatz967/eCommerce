import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productDetailsReducer, productListReducer} from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
  } from './reducers/userReducers'

const reducer = combineReducers({
    productList: productListReducer, productDetails: productDetailsReducer, cart: cartReducer, userRegisterReducer: userRegisterReducer, userLoginReducer: userLoginReducer, userDetailsReducer: userDetailsReducer, userUpdateReducer: userUpdateReducer, userUpdateProfileReducer: userUpdateProfileReducer, userListReducer: userListReducer, userDeleteReducer: userDeleteReducer 
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState ={
    cart: {cartItems: cartItemsFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

//console.log(store.getState())

export default store