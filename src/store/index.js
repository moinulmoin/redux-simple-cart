import {configureStore} from '@reduxjs/toolkit'
import cartListReducer from './slices/cartList'


const store = configureStore({
    reducer: { cartList: cartListReducer}
})

export default store