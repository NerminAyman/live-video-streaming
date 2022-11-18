import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: undefined,
    },
    reducers: {
        changeUserState: (state, action: PayloadAction<any>) => {
            state.value = action.payload;
        },
    },
});

export const {changeUserState} = userSlice.actions;
export const selectUser = (state: RootState) => state.user.value;
export default userSlice.reducer;
