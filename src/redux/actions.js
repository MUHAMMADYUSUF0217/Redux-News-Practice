import {newsFetching, newsFetched, newsError} from "../Components/NewsList/news_slice";
import { createAction } from "@reduxjs/toolkit";


// export const newsFetching = createAction("NEWS_FETCHING");
// export const newsFetched = createAction("NEWS_FETCHED");
// export const newsError = createAction("NEWS_ERROR");
// export const newsCreated = createAction("NEWS_CREATED");
// export const newsDeleted = createAction("NEWS_DELETED");
// export const filterFetching = createAction("FILTER_FETCHING");
// export const filterFetched = createAction("FILTER_FETCHED");
// export const filterError = createAction("FILTER_ERROR");
// export const activeFilter = createAction("ACTIVE_FILTER");



// export const filterFetching = () => {
//     return {
//         type: "FILTER_FETCHING"
//     }
// }
// export const filterFetched = (filters) => {
//     return {
//         type: "FILTER_FETCHED",
//         payload: filters
//     }
// }
// export const filterError = () => {
//     return {
//         type: "FILTER_ERROR"
//     }
// }

// export const activeFilter = (filter) => (dispatch) => {
//     setTimeout(() => {
//         dispatch({
//             type: "ACTIVE_FILTER",
//             payload: filter,
//         })
//     }, 1000)
// }


// export const deletedNews = (request) => (dispatch) => (id) => {
//     dispatch(newsDeleted(id));
//     request(`http://localhost:3001/news/${id}`, 'DELETE')
//     .then(data => console.log(data + "deleted"))
//     .then(dispatch(newsDeleted(id)))
//     .catch(err => console.log(err));
// }