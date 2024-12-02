import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchServices = createAsyncThunk('services/fetchServices', async () => {
  const response = await fetch('https://673423afa042ab85d1190055.mockapi.io/api/v1/services');
  return response.json();
});

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export const selectServices = (state) => state.services.data;
export const selectLoading = (state) => state.services.loading;
export const selectError = (state) => state.services.error;
export default servicesSlice.reducer;