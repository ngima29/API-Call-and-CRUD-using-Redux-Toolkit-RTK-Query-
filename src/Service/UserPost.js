import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const AllPost = createApi({
    reducerPath:"AllPost",
    baseQuery: fetchBaseQuery({ 
        baseUrl:"https://jsonplaceholder.typicode.com/"
    }),
    endpoints: (builder) => ({

        // get all post 
        getAllPost: builder.query({
            query: ()=>({
                url: 'posts',
                method: 'GET'
            })

        }),
        // get post by id
        getPostById: (builder).query({
            query: (id)=>{
                console.log("ID:", id)
                return {
                    url:`posts/${id}`,
                    method:"GET"
                }
            }
        }),
        // get  post by limit 
        getPostByLimit: (builder).query({
            query:(num)=>{
                return{
                    url: `posts?_limit=${num}`,
                    method:"GET"
                }
            }
        })

        /// insert post


    })
})

export const{useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery}= AllPost