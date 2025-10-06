import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const gptSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        gptSearchpage: false,
    },
    reducers:{
        toggleGptSearch: (state) => {
            state.gptSearchpage = !state.gptSearchpage
        }
    }
})

export const  {toggleGptSearch} = gptSlice.actions

export default gptSlice.reducer;