import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/rootReducer";

const sagaMiddleware = "";

const store = configureStore({
  reducer: rootReducer,
  // middleware: [sagaMiddleware],
});

// sagaMiddleware.substring(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
