import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import { news, marketDayWatch } from "./assets/MockData";
import MarketIndex from "./pages/Market";
import StockScreener from "./pages/StockScreener";
import WarrantScreener from "./pages/WarrantScreener";
import Dividend from "./pages/Dividend";
import ShareIssue from "./pages/ShareIssue";
import Financial from "./pages/Financial";
import News from "./pages/News";
import Announcement from "./pages/Announcement";
import Ideas from "./pages/Ideas";
import Comments  from "./pages/Comments";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Success from "./pages/success";
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import AdminDashboard from "./pages/admin/Dashboard";
import { Effects } from "./components/effects";
import { ConversationsWithMessagesWrapper } from "./components/ConversationsWithMessagesWrapper";
import { ContactsWrapper } from "./components/ContactsWrapper";
import {
  CometChatConversations,
  CometChatGroups,
  CometChatGroupsWithMessages,
  CometChatThemeContext,
  CometChatUsers,
  CometChatUsersWithMessages,
} from "@cometchat/chat-uikit-react";


const App: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<
  CometChat.User | null | undefined
>();

  const [isMobileView, setIsMobileView] = useState(false);

  function getConversationsWithMessages() {
    return <ConversationsWithMessagesWrapper isMobileView={isMobileView} />;
  }

  function getConversations() {
    return <CometChatConversations />;
  }

  function getContacts() {
    return <ContactsWrapper />;
  }

  Effects({
    setLoggedInUser,
    setIsMobileView,
  });

  return (
    <BrowserRouter>
      <div className="h-screen overflow-scroll" style={{ scrollbarWidth: "none" }}>
        <Header />
        <Routes>
          {/* General Routes */}
          <Route path="/" element={<Dashboard news={news} marketDayWatch={marketDayWatch} />} />
          <Route path="/market" element={<MarketIndex />} />
          <Route path="/stscreen" element={<StockScreener />} />
          <Route path="/wascreen" element={<WarrantScreener />} />
          <Route path="/dividend" element={<Dividend />} />
          <Route path="/shareissue" element={<ShareIssue />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/news" element={<News />} />
          <Route path="/announcements" element={<Announcement />} />
          <Route path="/ideas" element={getConversations()} />
          {/* <Route path="/ideas" element={getContacts()} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/success" element={<Success />} />
          <Route path="/comments" element={getConversationsWithMessages()} />
      
          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<AdminRoute />}>
            {/* Add admin-specific routes here */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
