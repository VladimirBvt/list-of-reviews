import {createSlice} from '@reduxjs/toolkit';
import reviewsData from '../../data.json';

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviewsData: reviewsData,
    reviews: [],
  },
  reducers: {
    getRuReviews (store, action) {
      // store.reviews = Object.entries(store.reviewsData.ru)
    },
    getEnReviews (store, action) {}
  },
})

export type Reviews = typeof reviewsData

export const {} = reviewsSlice.actions

export default reviewsSlice.reducer
