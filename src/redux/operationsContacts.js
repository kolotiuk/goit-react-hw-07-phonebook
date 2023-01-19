import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63c8005f075b3f3a91d7f615.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (text, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', { text });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
