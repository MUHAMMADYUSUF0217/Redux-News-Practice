import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import {useHttp} from "../../hook/useHttp";

const newsAdapter = createEntityAdapter();

// const initialState = {
//     news: [],
//     newsLoadingStatus: "mafia",
// }

const initialState = newsAdapter.getInitialState({
    newsLoadingStatus: "mafia",
});

export const fetchNews = createAsyncThunk("news/fetchNews", async() => {
    const {request} = useHttp();
    return await request("http://localhost:3001/news");
});


const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        newsCreated: (state, action) => {newsAdapter.addOne(state, action.payload)},
        newsDeleted: (state, action) => {newsAdapter.removeOne(state, action.payload)},
    },
    extraReducers: builder => {
        builder.addCase(fetchNews.pending, (state) => {
            state.newsLoadingStatus = "loading";
        });
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.newsLoadingStatus = "mafia";
            newsAdapter.setAll(state, action.payload,);
        });
        builder.addCase(fetchNews.rejected, (state) => {
            state.newsLoadingStatus = "error";
        });
         

    },

})

const { actions, reducer } = newsSlice;

const {selectAll} = newsAdapter.getSelectors(state => state.news);

 export const filteredNewsSelected = createSelector(
    (state) => state.filter.activeFilter,
    selectAll,
    (filter, news) => {
        if(filter === 'all') {
            return news
        } else {
            return news.filter(s => s.category === filter)
        }
    }
);
export const { newsFetching, newsFetched, newsError, newsCreated, newsDeleted } = actions;
export default reducer;