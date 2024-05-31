import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: JSON.parse(localStorage.getItem('wishlist')) || []
};

const wishListSlice = createSlice({
	name: "wishlist",
	initialState,
	reducers: {
		toggleEvent: (state, action) => {
			let index = state.value.findIndex(item => item.id === action.payload.id);

            if (index < 0) {
                state.value.push(action.payload);
            } else {
                state.value.splice(index, 1);
            }

			localStorage.setItem('wishlist', JSON.stringify(state.value));
		},
	}
});

export const { toggleEvent } = wishListSlice.actions;
export default wishListSlice.reducer;