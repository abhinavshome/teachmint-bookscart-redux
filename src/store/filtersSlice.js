import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        showHighRated: false,
        showLessCostly: false
    },
    reducers: {
        toggleFilter: (filters, action) => {
            filters[action.payload] = !filters[action.payload];
        }
    }
});
const filtersReducer = filtersSlice.reducer;
export const {toggleFilter} = filtersSlice.actions;
export default filtersReducer;