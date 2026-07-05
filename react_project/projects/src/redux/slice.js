import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users:[]
}
const UserSlice = createSlice({
  name:"user",
  

  initialState,
  reducers : {
    addUser: (state,action) =>{
      state.users.push(action.payload)
    }

  }
})

export const {addUser} = UserSlice.actions;

export default UserSlice.reducer;
