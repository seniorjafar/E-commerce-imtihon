import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
	value: JSON.parse(localStorage.getItem("cart")) || []
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			let index = state.value.findIndex(i => i?.id === action?.payload?.id);
			if (index < 0) {
				state.value.push({ ...action.payload, quantity: 1 });
				toast.success("Successfully added to cart");
			}
		},

		incremented: (state, action) => {
			let item = state.value.find(i => i.id === action.payload.id);
			if (item) item.quantity += 1;
		},

		decrementCart: (state, action) => {
			let item = state.value.find(i => i.id === action.payload.id);
			if (item) item.quantity -= 1;
		},

		removeFromCart: (state, action) => {
			state.value = state.value.filter(el => el.id !== action.payload.id);
		},

		deleteAllCart: (state) => {
			state.value = [];
		}
	},

	extraReducers: (builder) => {
		builder.addMatcher((action) => {
			return ['cart/addToCart', 'cart/incremented', 'cart/decrementCart', 'cart/removeFromCart', 'cart/deleteAllCart'].includes(action.type);
		}, (state, action) => {
			localStorage.setItem("cart", JSON.stringify(state.value));
		});
	},
});

export const { addToCart, removeFromCart, decrementCart, incremented, deleteAllCart } = cartSlice.actions;
export default cartSlice.reducer;