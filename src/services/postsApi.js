import { createApi,fetchBaseQuery  } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    tagTypes:['Posts'],
    endpoints: (builder) => ({
      getposts: builder.query({
        query: () => `/posts`,
        providesTags:['Posts']
      }),
      addPost :builder.mutation({
        query:(post)=>({
            
            url:`/posts`,
            method:'POST',
            body:post
        }),
        invalidatesTags:['Posts']
    }),
    updateContact :builder.mutation({
        query:({id,...rest})=>({
            url:`/posts/${id}`,
            method:'PUT',
            body:rest
        }),
        invalidatesTags:['Posts']
    }),
    deleteContact :builder.mutation({
        query:({id})=>({
            url:`/contacts/${id}`,
            method:'DELETE',
        }),
        invalidatesTags:['Posts']
    })
    }),
  })
 
  export const { useGetpostsQuery,useAddPostMutation,useUpdateContactMutation,useDeleteContactMutation } = postsApi