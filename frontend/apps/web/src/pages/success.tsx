import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";

const Success = () => {
  const [toastOpen, setToastOpen] = useState(false);
  const [notificationText, setNotificationText] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const sessionId = useSelector((state: RootState) => state.subscription.sessionId);
  const userId = useSelector((state: RootState) => state.auth.userId);

  useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    return () => {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();   

    try {
      // console.log("-------->", userId, sessionId)
      const response = await fetch('http://localhost:5000/api/subscribe/payment-success', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          sessionId: sessionId, // Replace with actual session ID
          modeType: false, // Replace with actual mode type
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Assuming updateUser functionality can be directly applied here
        navigate('/profile');
      } else {
        setNotificationText("Error: " + data.message);
        setSuccess(false);
        setToastOpen(true);
      }

      const startData = {

        membership: data.subscription.plan.name,
      };

      const startResponse = await fetch('http://localhost:5000/api/users/startMembership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(startData),
      });

      const startDataResponse = await startResponse.json();
      if (!startResponse.ok) {
        setNotificationText("Error starting membership: " + startDataResponse.message);
        setSuccess(false);
        setToastOpen(true);
      }

    } catch (error) {
      console.error("Error:", error);
      setNotificationText("Payment processing failed. Please try again.");
      setSuccess(false);
      setToastOpen(true);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-black min-h-screen flex flex-col items-center justify-center">

      <div className="flex">

        <div className="mt-8 text-center">
          <img className="w-70 mx-auto" src="/banner.png" alt="banner" />
        </div>

        <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
          <div className="text-center mb-8">
            <img className="mx-auto w-24 h-24" src="/logo.png" alt="logo" />
            <h1 className="text-3xl font-semibold mt-4">Payment Successful</h1>
            <p className="text-lg mt-2">All your commission calculations in one place</p>
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="bg-blue-600 text-black py-3 px-6 rounded-full text-xl hover:bg-blue-700 transition duration-300"
              onClick={onSubmit}
            >
              Proceed
            </button>
          </div>
          {toastOpen && (
            <div className={`p-4 rounded-lg w-full max-w-xs text-center ${success ? 'bg-green-500' : 'bg-red-500'}`}>
              {notificationText}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 text-center text-sm">
        <a href="https://docs.google.com/document/d/1HSAwK1r1D5Byja2rEmwo5wKY3d1eUdjpR1wylv9NeeU/edit" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-200">Terms of Service</a>
        <a href="/contact-us" className="ml-4 text-black underline hover:text-gray-200">Contact Us</a>
      </div>
    </div>
  );
};

export default Success;
