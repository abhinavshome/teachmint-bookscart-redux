import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    totalItems: 0,
  },
  reducers: {
    addToCart: (cart, action) => {
      const book = action.payload;
      const item = cart.items.find((i) => i.itemId === book.id);
      if (item) {
        item.qty++;
      } else {
        const item = {
          itemId: book.id,
          name: book.title,
          price: book.price,
          qty: 1,
        };
        cart.items.push(item);
      }

      cart.totalPrice += book.price;
      cart.totalItems++;
    },
  },
});
const cartReducer = cartSlice.reducer
export const {addToCart} = cartSlice.actions;
export default cartReducer;
