import {configureStore} from '@reduxjs/toolkit';
import reviewsReducer from './slices/reviewsSlice';
import languageReducer from './slices/languageSlice';
import pagesReducer from './slices/pagesSlice';


const store = configureStore({
  reducer: {
    language: languageReducer,
    page: pagesReducer,
    review: reviewsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store
