import ReduxThunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import news from '../Components/NewsList/news_slice';
import filter from '../Components/filter/filter_slice';

const stringMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }
    return next(action);
};

 export const store = configureStore({
    reducer: {
        news,
        filter
    },
    middleware: [ReduxThunk, stringMiddleware],
    devTools: process.env.NODE_ENV !== 'production'
});


// export const store = createStore(
//     combineReducers({news, filter}),
//     compose(applyMiddleware(ReduxThunk, stringMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
//     );