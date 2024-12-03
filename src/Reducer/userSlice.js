import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../components/Data";

export const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateuser: (state, action) => {
            const { id, name, email } = action.payload;
            const uu = state.find(u => u.id == id)
            if (uu) {
                uu.name = name;
                uu.email = email;
            }


        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const uu = state.find(u => u.id == id)
            if (uu) {
                return state.filter(u => u.id !== id);
            }
        }
    }
})
export const { addUser, deleteUser, updateuser } = userSlice.actions;
export default userSlice.reducer;