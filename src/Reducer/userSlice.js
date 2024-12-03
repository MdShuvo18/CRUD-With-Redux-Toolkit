import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../components/Data";

export const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        deleteUser: (state, action) => {
            const userId = action.payload;
            state.userList = state.userList.filter(user => user.id !== userId);
        }
    }
})
export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;