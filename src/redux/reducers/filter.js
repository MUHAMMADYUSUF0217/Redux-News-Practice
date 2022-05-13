import { filterFetching, filterFetched, filterError, activeFilter } from "../actions";
import {createReducer} from "@reduxjs/toolkit";
const initialState = {
    filters: [],
    filterLoadingStatus: "mafia",
    activeFilter: "all",
}

const filter = createReducer(initialState, {
    [filterFetching]: (state) => {state.filterLoadingStatus = "loading"},
    [filterFetched]: (state, action) => {state.filters = action.payload; state.filterLoadingStatus = "mafia"},
    [filterError]: (state) => {state.filterLoadingStatus = "error"},
    [activeFilter]: (state, action) => {state.activeFilter = action.payload},
}, [], state => state)




// const filter = (state = initialeState, action) => {
//     switch (action.type) {
//         case "FILTER_FETCHING":
//             return {
//                 ...state,
//                 filterLoadingStatus: "loading",
//             }
//         case "FILTER_FETCHED":
//             return {
//                 ...state,
//                 filters: action.payload,
//                 filterLoadingStatus: "mafia",
//             }
//         case "FILTER_ERROR":
//             return {
//                 ...state,
//                 filterLoadingStatus: "error",
//             }
//         case "ACTIVE_FILTER":
//             return {
//                 ...state,
//                 activeFilter: action.payload,
//             }                                       
//         default:    
//             return state
//     }
// }
export default filter;