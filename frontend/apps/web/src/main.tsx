import React from "react"; // Add this line
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { store } from "./store";
import "@cometchat/uikit-elements";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUIKit } from "@cometchat/chat-uikit-react";
import { UIKitSettingsBuilder } from '@cometchat/uikit-shared';
import { metaInfo } from "./metaInfo";
import App from "./App";
import "./index.css";
import { AppConstants } from "./AppConstants";
import { ColorModeProvider } from "./context/ColorModeContext";

(async () => {
  const uiKitSettings = new UIKitSettingsBuilder()
    .setAppId(AppConstants.APP_ID)
    .setRegion(AppConstants.REGION)
    .setAuthKey(AppConstants.AUTH_KEY)
    .subscribePresenceForAllUsers()
    .build();
  try {
    await CometChatUIKit.init(uiKitSettings);
    try {
      CometChat.setDemoMetaInfo(metaInfo);
    } catch (err) {}
    console.log("Initialization completed successfully");
    createRoot(document.getElementById("root")!).render(
      <GoogleOAuthProvider clientId="219106765321-po7377h2o5vl713fp3o7tfse6lvnracp.apps.googleusercontent.com">
        <StrictMode>
        <ColorModeProvider>
          <Provider store={store}>
            <App />
          </Provider>
          </ColorModeProvider>
        </StrictMode>
      </GoogleOAuthProvider>
    );
  } catch (error) {
    console.log("Initialization failed with error:", error);
  }
})();
