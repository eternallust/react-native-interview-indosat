import {createSlice} from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contactList: [],
    isLoading: false,
    contactDetail: {},
  },
  reducers: {
    setContactList: (state, action) => {
      state.contactList = action.payload;
    },
    setContactDetail: (state, action) => {
      state.contactDetail = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {setContactDetail, setContactList, setLoading} =
  contactSlice.actions;
export default contactSlice.reducer;
