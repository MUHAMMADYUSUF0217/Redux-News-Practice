import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: [],
    filterLoadingStatus: "mafia",
    activeFilter: "all",
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterFetching: (state) => {state.filterLoadingStatus = "loading"},
        filterFetched: (state, action) => {state.filters = action.payload; state.filterLoadingStatus = "mafia"},
        filterError: (state) => {state.filterLoadingStatus = "error"},
        activeFilter: (state, action) => {state.activeFilter = action.payload},
    },
})

const {actions, reducer} = filterSlice;
export const {filterFetching, filterFetched, filterError, activeFilter} = actions;
export default reducer;