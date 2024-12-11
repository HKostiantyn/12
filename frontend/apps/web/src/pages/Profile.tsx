import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Core Components
import ImageUpload from "../components/ImageUpload";
import MembershipPlans from "./MembershipPlans";
import AccountInfo from "./AccountInfo";
// import userMenuIcon from "/user-menu-icon.png";

interface AccountProps {}

const Profile: React.FC<AccountProps> = () => {
  const [currentTab, setCurrentTab] = useState<number>(1);
  const [toastOpen, setToastOpen] = useState<boolean>(false);
  const [notificationText, setNotificationText] = useState<string>("");
  const [notifyType, setNotifyType] = useState<"success" | "error">("success");

  const navigate = useNavigate();
  const location = useLocation();

  const plans = [
    {
      name: "STARTER",
      description: "Great for trying our APIs",
      price: "Free",
      features: [
        "10 Products",
        "10 API calls per minute (6 seconds each)",
        
        "1 Year Historical K-line",
       
        "End of Day Data",
      ],
    },
    {
      name: "BASIC",
      description: "Great for WebSocket",
      price: "10 USDT/monthly",
      features: [
        "100 products available",
        "Supports Forex, Commodities, Stocks, Cryptocurrencies",
        "60 API calls per minute (1 second each)",
        
        "1 Year Historical K-line",
        
        "End of Day Data",
        "Real-time K-line",
        "Order Book",
        "Real-time tick-by-tick",
      ],
    },
    {
      name: "PREMIUM",
      description: "Great for Trades",
      price: "20 USDT/monthly",
      features: [
        "200 products available",
        "Supports Forex, Commodities, Stocks, Cryptocurrencies",
        "600 API calls per minute (10 calls per second)",
        
        "3 Years Historical K-line",
        
        "End of Day Data",
        "Real-time K-line",
        "Order Book",
        "Real-time tick-by-tick",
      ],
    },
    {
      name: "PROFESSIONAL",
      description: "Perfect for exchanges",
      price: "30 USDT/monthly",
      features: [
        "3000 products available",
        "Supports Forex, Commodities, Stocks, Cryptocurrencies",
        "1200 API calls per minute (20 calls per second)",
        
        "5 Years Historical K-line",
        
        "End of Day Data",
        "Real-time K-line",
        "Order Book",
        "Real-time tick-by-tick",
      ],
    },
  ];
  
  useEffect(() => {
    document.body.classList.add("account-page");

    return () => {
      document.body.classList.remove("account-page");
    };
  }, [location.search, navigate]);

  const handleUpdateAccountInfo = (userData: any) => {
    setToastOpen(true);
    setNotificationText("Updating your account details.");
    setNotifyType("success");
  };

  const handleUploadLogo = async (file: File | null) => {
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/upload_logo`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload logo");
      }

      const resData = await response.json();

      if (resData.path.trim() !== "") {
        setToastOpen(true);
        setNotificationText("Successfully uploaded your logo.");
        setNotifyType("success");
      }
    } catch (error) {
      console.error("Error uploading logo:", error);
      setToastOpen(true);
      setNotificationText("Failed to upload your logo. Please try again.");
      setNotifyType("error");
    }
  };

  const handleClose = () => {
    setToastOpen(false);
  };

  return (
    <div className="h-full">
      {/* Toast Notification */}
      {toastOpen && (
        <div
          className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
            notifyType === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <p>{notificationText}</p>
            <button
              onClick={handleClose}
              className="text-xl font-bold focus:outline-none ml-4"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Main Account Page */}
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Sidebar */}
        <div className="bg-gray-100 w-full md:w-1/4 p-6">
          <div className="text-center mb-8">
            <img src="/user-menu-icon.png" alt="User Menu" className="w-20 mx-auto" />
          </div>
          <h2 className="text-xl font-semibold mb-6 text-center">Manage Account</h2>
          <nav>
            <button
              className={`block w-full text-left py-2 px-4 rounded-lg ${
                currentTab === 1 ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setCurrentTab(1)}
            >
              Pricing Levels
            </button>
            <button
              className={`block w-full text-left py-2 px-4 rounded-lg ${
                currentTab === 2 ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setCurrentTab(2)}
            >
              Upload Logo
            </button>
            <button
              className={`block w-full text-left py-2 px-4 rounded-lg ${
                currentTab === 3 ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setCurrentTab(3)}
            >
              Manage Account
            </button>
          </nav>
        </div>

        {/* Right Content */}
        <div className="flex-1 bg-white p-8">
          {currentTab === 1 && (
            <MembershipPlans
            subscriptionPlans={plans}
              // Additional props if needed
            />
          )}
          {currentTab === 2 && (
            <ImageUpload
            handleUploadEvent={handleUploadLogo} // Ensure this matches the prop name
          />
          )}
          {currentTab === 3 && (
            <AccountInfo
              handleUpdateAccountInfo={handleUpdateAccountInfo}
              // Additional props if needed
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
