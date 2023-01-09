import { createSlice } from '@reduxjs/toolkit';

const initialState = { values: [] };

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // --------------------------------
    saveContact: (state, action) => {
      state.values.push(action.payload);
    },

    // --------------------------------
    removeContact: (state, action) => {
      return {
        values: state.values.filter(contact => contact.id !== action.payload),
      };
    },
  },
});

export const selectContacts = state => state.contacts.values;
export const { saveContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
