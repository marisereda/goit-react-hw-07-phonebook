import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import filterReducer from './filterSlice';
import contactReducer from './contactsSlice';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedContactReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: persistedContactReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
