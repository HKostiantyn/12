import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Signup = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");  // To show error messages
  const [loading, setLoading] = useState(false);  // To handle loading state

  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      setError(""); // Clear any previous errors

      // Make POST request to backend using fetch
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Registration failed. Please try again.");
      }

      // Handle successful registration
      const data = await response.json();

      // Optionally, you can store the token or handle user data here
      console.log(data);

      navigate(redirect);  // Redirect to the page specified in the query param or homepage
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex items-center justify-center h-[90%] bg-gray-100">
      <section className="flex flex-col md:flex-row items-center justify-center gap-10  w-full p-4">
        <div className="w-full max-w-2xl">
          <h1 className="text-2xl font-semibold mb-4 text-center md:text-left">Register</h1>

          <form onSubmit={submitHandler} className="w-full">
            {/* Name Field */}
            <div className="my-[1rem]">
              <label htmlFor="name" className="block text-sm font-medium text-black">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 border border-solid border-2 border-gray-500 outline-1 outline-indigo-600 rounded w-full"
                placeholder="Enter name"
                value={username}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email Field */}
            <div className="my-[1rem]">
              <label htmlFor="email" className="block text-sm font-medium text-black">
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

            {/* Password Field */}
            <div className="my-[1rem]">
              <label htmlFor="password" className="block text-sm font-medium text-black">
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

            {/* Confirm Password Field */}
            <div className="my-[1rem]">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="mt-1 p-2 border border-solid border-2 border-gray-500 outline-1 outline-indigo-600 rounded w-full"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Error Message */}
            {error && <div className="text-red-500 mb-2">{error}</div>}

            {/* Submit Button */}
            <button
              disabled={loading}
              type="submit"
              className="bg-blue-500 text-white my-[1rem] px-4 py-2 rounded cursor-pointer w-full"
            >
              {loading ? "Registering..." : "Sign up"}
            </button>

          </form>

          <div className="mt-4">
            <p className="text-black">
              Already have an account?{" "}
              <Link
                to={redirect ? `/login?redirect=${redirect}` : "/login"}
                className="text-blue-500 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-2xl">
          <video
            src="/hongkongtrading.mp4"
            className="w-full h-auto transform transition-all  duration-300 ease-in-out hover:blur-none focus:blur-none"
            autoPlay
            loop
            muted
            controls
          />
        </div>
      </section>

    </div>
  );
};

export default Signup;
