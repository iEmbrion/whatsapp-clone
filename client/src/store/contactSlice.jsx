import { createSlice } from '@reduxjs/toolkit';

//No contact selected initially
const initialSelectedContactState = {
  email: '',
  name: '',
  lastMessage: '',
  lastTextDate: '',
};

const selectedContactSlice = createSlice({
  name: 'selectedContact',
  initialState: initialSelectedContactState,
  reducers: {
    setSelectedContactDetails(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.lastMessage = action.payload.lastMessage;
      state.lastTextDate = action.payload.lastTextDate;
    },
  },
});

export const selectedContactActions = selectedContactSlice.actions;
export default selectedContactSlice.reducer;
