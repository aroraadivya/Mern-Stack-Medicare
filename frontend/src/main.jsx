// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>

//     <ToastContainer theme="dark" position="top-right" autoClose={3000} closeOnClick pauseOnHover={false} />
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );


import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authContextProvider } from "./context/AuthContext.jsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Please check your HTML.");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <authContextProvider>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
      />
      <App />
    </authContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
