import React from "react"; // Add this line
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { store } from './store';
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <GoogleOAuthProvider clientId="219106765321-po7377h2o5vl713fp3o7tfse6lvnracp.apps.googleusercontent.com">
        <StrictMode>
            <AuthProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </AuthProvider>
        </StrictMode>
    </GoogleOAuthProvider>
);
