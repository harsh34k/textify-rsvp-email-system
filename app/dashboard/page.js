'use client';

import axios from "axios";
import { useState } from "react";

function Dashboard() {
  const [sheetLink, setSheetLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sheetIdMatch = sheetLink.match(/\/d\/([a-zA-Z0-9-_]+)/);
    const sheetId = sheetIdMatch ? sheetIdMatch[1] : null;

    if (!sheetId) {
      alert("Invalid Google Sheet Link. Please provide a correct link.");
      return;
    }

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_GSCRIPT_URL,
        { sheetId },
        {
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          }
        }
      );
      console.log(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-xl p-8 space-y-6 bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700">Submit Your Google Sheet</h2>

        <div className="space-y-3">
          <p className="text-sm text-gray-600 text-center">
            📋 Please make sure your Google Sheet contains the following columns:
            <br />
            <span className="font-semibold text-gray-800">Name, Email,Template,Email Status, Response </span>
            with relevant data.
          </p>

          <div className="w-full border rounded-lg overflow-hidden">
            <img
              src="/excel-preview.png"
              alt="Google Sheet Example"
              className="w-full object-cover"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Google Sheet Link</label>
            <input
              type="url"
              placeholder="https://docs.google.com/..."
              value={sheetLink}
              onChange={(e) => setSheetLink(e.target.value)}
              required
              className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
