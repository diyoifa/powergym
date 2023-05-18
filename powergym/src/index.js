import React from "react";
import './index.css'
//import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading="null" persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>,
);
