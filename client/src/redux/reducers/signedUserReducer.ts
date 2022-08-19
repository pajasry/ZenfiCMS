import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserEntity } from "@/graphql/schema";
import { AppState } from "@/redux/store";

interface State {
    signedUser: UserEntity | null;
}

const initialState: State = {
    signedUser: null,
};

const signedUserSlice = createSlice({
    name: "signedUser",
    initialState,
    reducers: {
        signInAction: (state, action: PayloadAction<UserEntity>) => {
            state.signedUser = action.payload;
        },
    },
});

export const { signInAction } = signedUserSlice.actions;

export const selectSignedUser = (state: AppState) => state.signedUser;
export const signedUserReducer = signedUserSlice.reducer;
