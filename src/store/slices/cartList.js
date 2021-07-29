import { createSlice } from '@reduxjs/toolkit';

const cartListSlice = createSlice({
	name: 'cartList',
	initialState: {
		isShowing: true,
		productQuantity: 3,
		totalPrice: 18,
		cartProduct: 1,
	},
	reducers: {
		toggle(state) {
			state.isShowing = !state.isShowing;
		},
		addItem(state) {
			if (state.isShowing === true) {
				state.productQuantity = state.productQuantity + 1;
				state.totalPrice = state.productQuantity * 6;
			}
			if (state.productQuantity > 0) {
				state.cartProduct = 1;
			}
		},
		removeItem(state) {
			state.productQuantity = state.productQuantity - 1;
			state.totalPrice = state.productQuantity * 6;
			if (state.productQuantity === 0) {
				state.isShowing = !state.isShowing;
				state.cartProduct = 0;
			}
		},
	},
});

export const cartListActions = cartListSlice.actions;

export default cartListSlice.reducer;
