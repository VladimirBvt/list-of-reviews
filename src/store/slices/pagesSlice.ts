import {createSlice} from '@reduxjs/toolkit';

const pagesSlice = createSlice({
  name: 'page',
  initialState: {
    currentPage: 1
  },
  reducers: {
    nextPage (store, action) {},
    prevPage (store, action) {},
  }
})

export const {nextPage, prevPage} = pagesSlice.actions

export default pagesSlice.reducer
