import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { OnlineStatusProvider } from "./context/OnlineStatusContext";
import swDev from "./swdev.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <OnlineStatusProvider>
          <App />
        </OnlineStatusProvider>
      </Provider>
    </PersistGate>
  // </React.StrictMode>
);

// swDev();