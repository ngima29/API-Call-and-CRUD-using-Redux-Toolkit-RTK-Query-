import { configureStore } from '@reduxjs/toolkit'
import {setupListeners } from '@reduxjs/toolkit/query'
import  {AllPost} from '../Service/UserPost'


export const store = configureStore({
  reducer: {
    [AllPost.reducerPath]:AllPost.reducer,
  },

  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(AllPost.middleware)
})

setupListeners(store.dispatch)