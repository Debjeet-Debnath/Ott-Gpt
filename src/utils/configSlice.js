import { createSlice } from "@reduxjs/toolkit";


const configSlice = createSlice({
    name: "language",
    initialState: {
        currentLanguage: 'en',
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.currentLanguage = action.payload;
        }
    }
});


export default configSlice.reducer

export const {changeLanguage} = configSlice.actions