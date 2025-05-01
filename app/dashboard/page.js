'use client';

import axios from "axios";
import { useState } from "react";

function Dashboard() {
  const [sheetLink, setSheetLink] = useState("");
  const [subject, setSubject] = useState("You're Invited! RSVP Now for Our Exclusive Event 🎉");
  const [template, setTemplate] = useState(`Hi {{Name}},\nYou're invited to our event. \nClick here to RSVP: {{RSVP_Link}}`);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [customFields, setCustomFields] = useState([
    { label: "", type: "text", options: [] }
  ]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const sheetIdMatch = sheetLink.match(/\/d\/([a-zA-Z0-9-_]+)/);
    const sheetId = sheetIdMatch ? sheetIdMatch[1] : null;

    if (!sheetId) {
      alert("Invalid Google Sheet Link. Please provide a correct link.");
      setLoading(false);
      return;
    }
    console.log(sheetId, template, subject, customFields);
    console.log("Custom Fields", customFields);



    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_GSCRIPT_URL,
        { sheetId, template, subject, customFields },
        {
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          }
        }
      );
      console.log("response", response);
      setStatus("sent");
    } catch (error) {
      console.error('Error:', error);
      console.log("error", error.response.data);

      setStatus("error");
    } finally {
      setLoading(false);
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
            <span className="font-semibold text-gray-800">Name, Email, Template, Email Status, Response</span>
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
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email Subject</label>
            <input
              type="text"
              placeholder="You're Invited!"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email Template</label>
            <textarea
              placeholder="Hi {{Name}}, you're invited..."
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              rows={6}
              className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Use placeholders like <code className="bg-gray-200 p-1 rounded">{"{{ Name }}"}</code> and <code className="bg-gray-200 p-1 rounded">{"{{ RSVP_Link }}"}</code> in your template.
            </p>
          </div>

          {/* Custom RSVP Fields */}
          <div className="space-y-4">
            <label className="text-md font-semibold text-indigo-600">Custom RSVP Fields (Optional)</label>

            {customFields.map((field, index) => (
              <div key={index} className="bg-gray-50 p-4 border rounded-lg space-y-2">
                <input
                  type="text"
                  placeholder="Field label (e.g. Phone Number)"
                  value={field.label}
                  onChange={(e) => {
                    const updated = [...customFields];
                    updated[index].label = e.target.value;
                    setCustomFields(updated);
                  }}
                  className="w-full px-3 text-black py-2 border rounded"
                />

                <select
                  value={field.type}
                  onChange={(e) => {
                    const updated = [...customFields];
                    updated[index].type = e.target.value;
                    // Reset options if checkbox type selected
                    if (e.target.value.startsWith('checkbox')) {
                      updated[index].options = ["Option 1"];
                    } else {
                      updated[index].options = [];
                    }
                    setCustomFields(updated);
                  }}
                  className="w-full px-3 py-2 border text-black rounded"
                >
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                  <option value="checkbox-multiple">Checkbox (Multiple Select)</option>
                  <option value="checkbox-single">Checkbox (Single Select)</option>
                </select>


                {(field.type === "checkbox-multiple" || field.type === "checkbox-single") && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Options</label>
                    {field.options.map((opt, optIdx) => (
                      <div key={optIdx} className="flex gap-2 items-center">
                        <input
                          type="text"
                          placeholder={`Option ${optIdx + 1}`}
                          value={opt}
                          onChange={(e) => {
                            const updated = [...customFields];
                            updated[index].options[optIdx] = e.target.value;
                            setCustomFields(updated);
                          }}
                          className="flex-1 px-3 py-2 text-black border rounded"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updated = [...customFields];
                            updated[index].options.splice(optIdx, 1);
                            setCustomFields(updated);
                          }}
                          className="text-red-500 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => {
                        const updated = [...customFields];
                        updated[index].options.push(`Option ${field.options.length + 1}`);
                        setCustomFields(updated);
                      }}
                      className="text-indigo-600 text-sm"
                    >
                      + Add Option
                    </button>
                  </div>
                )}


                <button
                  type="button"
                  onClick={() => {
                    const updated = [...customFields];
                    updated.splice(index, 1);
                    setCustomFields(updated);
                  }}
                  className="text-red-500 text-sm underline"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                setCustomFields([...customFields, { label: "", type: "text", options: [] }])
              }
              className="text-indigo-600 font-medium text-sm"
            >
              + Add Field
            </button>
          </div>


          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 text-white rounded-lg transition-all duration-200 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
          >
            {loading ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Submit'}
          </button>

          {status === 'error' && (
            <p className="text-center text-red-500 text-sm">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
