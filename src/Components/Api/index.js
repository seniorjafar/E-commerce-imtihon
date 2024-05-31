import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'mainApi',
  baseQuery: retry(fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token")
      if (token) {
        headers.set('authentication', `${token}`)
      }
      
      return headers
    }
  }), { maxRetries: 1 }),
  tagTypes: ["Product"],
  endpoints: () => ({}),
})