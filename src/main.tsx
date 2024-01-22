import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { injectStore } from "./helpers/injectStore.tsx";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { ConfigProvider } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
// import store, { persistor } from "@store/store.tsx";

// injectStore(store);

// console.log("store", store);

// const root = ReactDOM.createRoot(document.getElementById("root"));
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  // <GoogleOAuthProvider clientId="116088983569-bnlgslv0bjcu2q6lq66sesj4grmr8i10.apps.googleusercontent.com">
  // <Provider store={store}>
  //   <PersistGate persistor={persistor}>
  //     <ConfigProvider
  //       theme={{
  //         token: {
  //           colorPrimary: "#3C8BC7",
  //         },
  //       }}
  //     >
        <Router>
          <App />
        </Router>
  //     </ConfigProvider>
  //   </PersistGate>
  // </Provider>
  // </GoogleOAuthProvider>
);
