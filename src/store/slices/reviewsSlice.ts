import {createSlice} from '@reduxjs/toolkit';
import reviewsData from '../../data.json';
import {changeLanguage} from './languageSlice';

export type Review = [string, {
  name: string,
  date: string,
  review: string,
}]

interface IInitialState {
  reviewsData: ReviewsData;
  reviews: Review[] | [];
}

const initialState: IInitialState = {
  reviewsData: reviewsData,
  reviews: Object.entries(reviewsData.ru),
}

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(changeLanguage, (state, action) => {
      const language = action.payload
      if (language === 'ru') {
        state.reviews = Object.entries(state.reviewsData.ru)
      }
      if (language === 'en') {
        state.reviews = Object.entries(state.reviewsData.en)
      }
    })
  }
})

export type ReviewsData = typeof reviewsData

export default reviewsSlice.reducer
