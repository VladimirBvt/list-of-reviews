import {createSlice} from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: 'ru',
  },
  reducers: {
    changeLanguage (store, action) {
      store.language = action.payload
    }
  }
})

export const {changeLanguage} = languageSlice.actions

export default languageSlice.reducer
