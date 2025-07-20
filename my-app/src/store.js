// src/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'  // change as per your reducer file

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default store  // ✅ This is required for default import

