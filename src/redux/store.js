import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import rootReducer from './rootReducer';
import { authReducer } from './slices/authSlice';


const authPersistConfig = {
    key: 'auth',
  storage: AsyncStorage,
//   whitelist: ['token'],
};

// const reducer = persistReducer(authPersistConfig, rootReducer);

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer), 

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export default { store, persistor };