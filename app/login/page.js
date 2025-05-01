'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Form submitted", { username, password });

    if (username === 'admin' && password === '123456') {
      alert("Login successful!");
      router.push("/dashboard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4 font-sans">
      <div className="bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row overflow-hidden max-w-5xl w-full min-h-[30rem]">

        {/* Left - Branding */}
        <div className="md:w-1/2 bg-gradient-to-br from-[#5577c2] to-[#0005a0] p-10 text-white flex flex-col justify-center">
          <img src="/textify-logo.jpg" alt="Textify Logo" className="h-15 w-14 mb-4" />
          <h1 className="text-4xl font-bold mb-4">Welcom Back!</h1>
          <p className="text-lg leading-relaxed">
            Please login to access your dashboard.
          </p>
        </div>

        {/* Right - Login Form */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
              />
            </div>

            <button
              type="submit"

              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 font-medium"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
