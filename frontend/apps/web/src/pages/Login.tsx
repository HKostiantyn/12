import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate is used in v6
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../store/authSlice';
import { RootState } from "../store";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // To show error messages
  const navigate = useNavigate(); // useNavigate for redirecting in v6

  const handleGoogleLogin = async (credentialResponse: any) => {
    const token = credentialResponse.credential;

    // Send the token to the backend
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/google-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();
    if (response.ok) {

      // Save token and userId if they exist
      //  if (data.token) {
      //   localStorage.setItem("token", data.token);
      // } else {
      //   console.error("Token is missing from the response.");
      // }

      // if (data.userId) {
      //   localStorage.setItem("userId", data.userId);
      // } else {
      //   console.error("userId is missing from the response.");
      // }

      dispatch(setUserDetails({
        userId: data.userId || null,
        admin: data.admin || false,
        username: null, // Default for optional fields
        email: null,
        level: null,
        stripeSessionId: null,
        token: null,
      }));
   

      navigate("/"); // Redirect using navigate
    } else {
      console.error("Google login failed", data.error);
    }
  };

  // Function to handle form submission
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log("Full response data:", data);

      if (!response.ok) {
        setError(data.message || "Something went wrong!");
        return;
      }

      // Save token and userId if they exist
      // if (data.token) {
      //   localStorage.setItem("token", data.token);
      // } else {
      //   console.error("Token is missing from the response.");
      // }

      // if (data.userId) {
      //   localStorage.setItem("userId", data.userId);
      // } else {
      //   console.error("userId is missing from the response.");
      // }

      console.log("data--------->", data)

      
      dispatch(setUserDetails({
        userId: data.userId || null,
        admin: data.admin || false,
        username: null, // Default for optional fields
        email: null,
        level: null,
        stripeSessionId: null,
        token: null,
      }));
   


      navigate("/");
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error during login:", error);
    }
  };


  return (
    <div className=" flex items-center justify-center h-[90%] bg-gray-100">
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-8xl w-full p-4">
        {/* Left Content */}
        <div className="w-full max-w-2xl">
          <h1 className="text-2xl font-semibold mb-4 text-center md:text-left">
            Sign In
          </h1>

          {error && <p className="text-red-500">{error}</p>} {/* Show error message */}

          <form onSubmit={submitHandler} className="w-full">
            <div className="my-4">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-black"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 border border-solid border-gray-500 outline-indigo-600 rounded w-full"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-lg font-medium text-black"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 border border-solid border-gray-500 outline-indigo-600 rounded w-full"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 mt-5 rounded cursor-pointer w-full"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-black text-lg">
              New Customer?{" "}
              <Link
                to="/signup"
                className="text-blue-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
          <div className="mt-4 w-full flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => {
                console.error("Login Failed");
              }}
              theme="outline"
              size="large"
              width="400"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-2xl">
          <img
            src="/hongkongflag.png"
            alt="Hong Kong Flag"
            className="w-full h-auto transform transition-all duration-300 ease-in-out blur-sm hover:blur-none focus:blur-none"
          />
        </div>
      </section>
    </div>

  );
};

export default Login;
