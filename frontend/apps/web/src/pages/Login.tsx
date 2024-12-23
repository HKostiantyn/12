import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate is used in v6
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../store/authSlice";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { RootState } from "../store";
import { AppConstants } from "../AppConstants";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // To show error messages
  const navigate = useNavigate(); // useNavigate for redirecting in v6

  const handleGoogleLogin = async (credentialResponse: any) => {
    const token = credentialResponse.credential;

    // Send the token to the backend
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/google-login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      }
    );

    const userData = await response.json();
    if (response.ok) {
      dispatch(
        setUserDetails({
          userId: userData.userId || null,
          admin: userData.admin || false,
          username: userData.username || null,
          email: userData.email || null,
          level: userData.level || null,
          stripeSessionId: userData.stripeSessionId || null,
          token: userData.token || null,
          avatar: userData.avatar || null,
        })
      );


      const cometUserId = userData.userId; // Use unique user ID
      const cometAuthKey = AppConstants.AUTH_KEY; // Your CometChat Auth Key

      // Construct the avatar URL only if avatar exists
      const cometAvatar =`${import.meta.env.VITE_BACKEND_URL}${userData.avatar}`;

      // Check if user exists in CometChat
      try {
        const existingUser = await CometChat.getUser(cometUserId);
        console.log("User already exists in CometChat:", existingUser);

        // // Check if avatar is missing and update if necessary
        // if (!existingUser.getAvatar() && cometAvatar) {
        //   console.log("Avatar is missing, updating...");
        //   existingUser.setAvatar(cometAvatar);
        //   await CometChat.updateUser(existingUser, cometAuthKey); // Update user with new avatar
        //   console.log("User avatar updated in CometChat.");
        // }
      } catch (error) {
        console.log("User does not exist in CometChat, creating user...");
        const newUser = new CometChat.User(cometUserId);
        newUser.setName(userData.username || "New User");
        newUser.setAvatar(cometAvatar || ""); // Set avatar if available

        await CometChat.createUser(newUser, cometAuthKey);
        console.log("User created in CometChat.");
      }

      // Login the user into CometChat
      const cometLogin = await CometChat.login(cometUserId, cometAuthKey);
      console.log("CometChat login successful:", cometLogin);

      

      navigate("/"); // Redirect using navigate
    } else {
      console.error("Google login failed", userData.error);
    }
  };

  // Function to handle form submission
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Authenticate user with your backend
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const userData = await response.json();
      console.log("Full response data:", userData);

      if (!response.ok) {
        setError(userData.message || "Something went wrong!");
        return;
      }

      console.log("User ID from backend:", userData.userId);

      if (!userData.userId) {
        throw new Error("User ID is missing from the response.");
      }

      // Save user details in your Redux store or state management
      dispatch(
        setUserDetails({
          userId: userData.userId || null,
          admin: userData.admin || false,
          username: userData.username || null,
          email: userData.email || null,
          level: userData.level || null,
          stripeSessionId: userData.stripeSessionId || null,
          token: userData.token || null,
          avatar: userData.avatar || null,
        })
      );

      const cometUserId = userData.userId; // Use unique user ID
      const cometAuthKey = AppConstants.AUTH_KEY; // Your CometChat Auth Key

      // Construct the avatar URL only if avatar exists
      const cometAvatar =`${import.meta.env.VITE_BACKEND_URL}${userData.avatar}`;

      // Check if user exists in CometChat
      try {
        const existingUser = await CometChat.getUser(cometUserId);
        console.log("User already exists in CometChat:", existingUser);

        // // Check if avatar is missing and update if necessary
        // if (!existingUser.getAvatar() && cometAvatar) {
        //   console.log("Avatar is missing, updating...");
        //   existingUser.setAvatar(cometAvatar);
        //   await CometChat.updateUser(existingUser, cometAuthKey); // Update user with new avatar
        //   console.log("User avatar updated in CometChat.");
        // }
      } catch (error) {
        console.log("User does not exist in CometChat, creating user...");
        const newUser = new CometChat.User(cometUserId);
        newUser.setName(userData.username || "New User");
        newUser.setAvatar(cometAvatar || ""); // Set avatar if available

        await CometChat.createUser(newUser, cometAuthKey);
        console.log("User created in CometChat.");
      }

      // Login the user into CometChat
      const cometLogin = await CometChat.login(cometUserId, cometAuthKey);
      console.log("CometChat login successful:", cometLogin);

      // Navigate to the home page
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
          {error && <p className="text-red-500">{error}</p>}{" "}
          {/* Show error message */}
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
              <Link to="/signup" className="text-blue-500 hover:underline">
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
