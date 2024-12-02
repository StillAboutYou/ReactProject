import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../components/userSlice';
import servicesReducer from '../components/servicesSlice';

const store = configureStore({

  reducer: {
    user: userReducer,
    services: servicesReducer,
  },
});

export default store;