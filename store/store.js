import { configureStore } from "@reduxjs/toolkit";
import login from "./reducers/login/login";
import { createWrapper } from "next-redux-wrapper";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, login);

const makeStore = () => {
  let store = configureStore({
    reducer: {
      login,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  return store;
};

export const persistor = persistStore(makeStore());

export const wrapper = createWrapper(makeStore);
