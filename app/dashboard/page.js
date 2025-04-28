"use client";

import axios from "axios";
import { useState } from "react";

function Dashboard() {
  const [sheetLink, setSheetLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Sheet Link:", sheetLink);

    const sheetIdMatch = sheetLink.match(/\/d\/([a-zA-Z0-9-_]+)/);
    const sheetId = sheetIdMatch ? sheetIdMatch[1] : null;

    if (!sheetId) {
      alert("Invalid Google Sheet Link. Please provide a correct link.");
      return;
    }
    
    const respose = axios.post("https://script.google.com/macros/s/AKfycbw-qsnm7-v1l4N-_vt9yab7bVi8ctdPgKPhlDyCSlxzgX1SmQjBDQbHza7C1F6NtIrh/exec", { sheetId },{headers: {'content-type': "text/plain"}}).catch((error) => {
      console.error("Error:", error);
    });
    console.log("Response:", respose.data);
    


  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Submit Google Sheet Link</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
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
