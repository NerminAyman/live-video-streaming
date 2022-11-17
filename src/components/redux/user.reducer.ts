import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: undefined,
    },
    reducers: {
        changeUserState: (state, action: PayloadAction<any>) => {
            state.value = action.payload;
            console.log('hiiiiiiiiiiiiiiiiiii', state.value);
        },
    },
});

export const {changeUserState} = userSlice.actions;

export default userSlice.reducer;
