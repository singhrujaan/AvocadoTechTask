import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postsApi } from '.././services/postsApi'
import postsReducer from ".././services/PostsSlice"
import tableReducer from '.././services/TableSlice'

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    posts:postsReducer,
    tables:tableReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
})
setupListeners(store.dispatch)