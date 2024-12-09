import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom"; // useNavigate is used in v6
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext"; // Import useAuth to access context

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // To show error messages
  const navigate = useNavigate(); // useNavigate for redirecting in v6
  const { setIsLoggedIn } = useAuth();

  const handleGoogleLogin = async (credentialResponse: any) => {
    const token = credentialResponse.credential;

    // Send the token to the backend
    const response = await fetch("http://localhost:5000/api/auth/google-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();
    if (response.ok) {

      // Save the token in localStorage or sessionStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      setIsLoggedIn(true);

      // Redirect user to dashboard or home page after successful login
      navigate("/"); // Redirect using navigate
    } else {
      console.error("Google login failed", data.error);
    }
  };

  // Function to handle form submission
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    // Make an API call to login the user
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
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

      if (!response.ok) {
        // If response is not ok, show error message
        setError(data.message || "Something went wrong!");
        return;
      }

      // Save the token in localStorage or sessionStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      setIsLoggedIn(true);

      // Redirect user to dashboard or home page after successful login
      navigate("/"); // Redirect using navigate
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.log(error)
    }
  };

  return (
    <div>
      <section className="pl-[10rem] flex flex-wrap">
        <div className="mr-[4rem] mt-[5rem]">
          <h1 className="text-2xl font-semibold mb-4">Sign In</h1>

          {error && <p className="text-red-500">{error}</p>} {/* Show error message */}

          <form onSubmit={submitHandler} className="container w-[40rem]">
            <div className="my-[2rem]">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 border border-solid border-2 border-gray-500 outline-1 outline-indigo-600 rounded w-full"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 border border-solid border-2 border-gray-500 outline-1 outline-indigo-600 rounded w-full"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500  text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
            >
              Login
            </button>
          </form>

          <div className="mt-4">
            <p className="text-black">
              New Customer?{" "}
              <Link
                to="/signup"
                className="text-blue-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => {
              console.error("Login Failed");
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
