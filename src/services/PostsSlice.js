import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async()=>{
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            return [...response.data]
        }
        catch(err){
            console.log(err)
        }
    }
)

const PostsSlice = createSlice({
    name:"posts",
    initialState:{
        items:[],
        status:'idle',
},

    extraReducers(builder){
        builder
        .addCase(getPosts.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(getPosts.fulfilled,(state,action)=>{
            state.status='success'
            state.items= action.payload
        })
        .addCase(getPosts.rejected,(state,action)=>{
            state.status='failed'
        })
        
    }
})

export default PostsSlice.reducer