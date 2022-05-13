import {createReducer} from '@reduxjs/toolkit';
import {newsFetching, newsFetched, newsError, newsCreated, newsDeleted} from '../actions';

const initialState = {
    news: [],
    newsLoadingStatus: "mafia",
}

const news = createReducer(initialState, {
    [newsFetching]: (state) => {state.newsLoadingStatus = "loading"},
    [newsFetched]: (state, action) => {state.news = action.payload; state.newsLoadingStatus = "mafia"},
    [newsError]: (state) => {state.newsLoadingStatus = "error"},
    [newsCreated]: (state, action) => {state.news.push(action.payload)},
    [newsDeleted]: (state, action) => {state.news = state.news.filter(s => s.id !== action.payload)},
}, [], state => state)


// const news = createReducer(initialeState, builder => {
//     builder.addCase(newsFetching, (state) => {
//         state.newsLoadingStatus = "loading";
//     });
//     builder.addCase(newsFetched, (state, action) => {
//         state.news = action.payload;
//         state.newsLoadingStatus = "mafia";
//     });
//     builder.addCase(newsError, (state) => {
//         state.newsLoadingStatus = "error";
//     });
//     builder.addCase(newsCreated, (state, action) => {
//         state.news.push(action.payload);
//     });
//     builder.addCase(newsDeleted, (state, action) => {
//         state.news = state.news.filter(s => s.id !== action.payload);
//     });
// })

// const news = (state = initialeState, action) => {
//     switch (action.type) {
//         case "NEWS_FETCHING": 
//             return {
//                 ...state,
//                 newsLoadingStatus: "loading",
//             }
//         case "NEWS_FETCHED":
//             return {
//                 ...state,
//                 news: action.payload,
//                 newsLoadingStatus: "mafia",
//             }
//         case "NEWS_ERROR":
//             return {
//                 ...state,
//                 newsLoadingStatus: "error",
//             }
//         case "NEWS_CREATED":
//             return {
//                 ...state,
//                 news: [...state.news, action.payload],
//             }
//         case "NEWS_DELETED":
//              return {
//                 ...state,
//                 news: state.news.filter(s => s.id !== action.payload),
//             }                                        
//         default:    
//             return state
//     }
// }
export default news;