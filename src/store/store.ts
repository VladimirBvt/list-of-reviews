import {combineReducers, configureStore} from '@reduxjs/toolkit';
import reviewsReducer from './slices/reviewsSlice';
import languageReducer from './slices/languageSlice';


const reducer = combineReducers({
  language: languageReducer,
  review: reviewsReducer,
})

const store = configureStore({
  reducer,
})

export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch


export default store
