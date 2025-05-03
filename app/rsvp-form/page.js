
'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';

export default function RSVPForm() {
    const [email, setEmail] = useState('');
    const [sheetId, setSheetId] = useState('');
    const [fields, setFields] = useState([]);
    const [formData, setFormData] = useState({});
    const [status, setStatus] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const id = urlParams.get('sheetId');

        if (token && id) {
            const response = fetch(`https://script.google.com/macros/s/AKfycbyt4EjDYEKCwCRXufIYFC97x9yVm4KapWLMtlodMC5bY2VhefTa_6gO4GN8rPrMRsb1/exec?token=${token}&sheetId=${id}`)
                .then(res => res.json())
                .then(data => {
                    console.log("response", data);
                    setEmail(data.email);
                    setSheetId(id);
                    setFields(data.customFields || []);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setStatus('❌ Failed to fetch form data.');
                    setLoading(false);
                });


        } else {
            setStatus('❌ Missing sheetId, sheetName, or token in URL');
            setLoading(false);
        }
    }, []);

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        const payload = {
            action: "updateResponse",
            sheetId,
            email,
            response: formData,
        };

        try {
            // const res = await fetch(process.env.NEXT_PUBLIC_GSCRIPT_URL, {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            //     body: JSON.stringify(payload),
            // });
            const res = await axios.post(
                process.env.NEXT_PUBLIC_GSCRIPT_URL,
                {
                    action: "updateResponse",
                    sheetId,
                    email,
                    response: formData,
                },
                {
                    headers: {
                        'Content-Type': 'text/plain;charset=utf-8',
                        // 'Content-Type': 'application/json',
                    }
                }
            );
            setStatus('✅ RSVP submitted successfully!');
        } catch (err) {
            console.error(err);
            setStatus('❌ Submission failed.');
            setStatus(`❌ Error: ${data.message}`);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fef5e7] to-[#fff] px-4 py-8">
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-yellow-200">
                {/* Header */}
                <div className="bg-[#fff3cd] py-4 border-b border-yellow-300 text-center">
                    <img
                        src="/banner.png"
                        alt="Header"
                        className="mx-auto mb-2"
                    />
                    <h1 className="text-xl font-bold text-[#a0522d] uppercase">Mahaveer Swami Janma Kalyanak</h1>
                    <p className="text-sm text-gray-700">Sunday, April 27th, 2025</p>
                </div>

                {/* Image */}
                <div className="py-4">
                    <img
                        src="mahaveer.png"
                        alt="Event"
                        className="mx-auto rounded-xl shadow-md"
                    />
                </div>

                {/* Body */}
                <div className="px-6 pb-8 text-[15px] text-gray-800 space-y-4 font-serif">
                    <p className="font-medium text-center text-red-700">Mahaveer Swami&apos;s Kalyanak Mahotsav is coming up soon!</p>
                    <p className="text-center text-green-700 font-semibold">🎉 We invite you to celebrate with us!</p>

                    <p className="italic">The event will include activities, group discussions, and more.</p>

                    {/* Highlights */}
                    <div className="space-y-3">
                        <div className="bg-[#fff9e6] p-3 rounded-xl shadow">
                            <h3 className="text-md font-semibold text-[#c0392b]">Snack Pack #1</h3>
                            <p>12-15 year group learning activities</p>
                        </div>
                        <div className="bg-[#f9fbe7] p-3 rounded-xl shadow">
                            <h3 className="text-md font-semibold text-[#27ae60]">Snack Pack #2</h3>
                            <p>Fun activities and discussion on “How to overcome temptations?”</p>
                        </div>
                        <div className="bg-[#e8f8f5] p-3 rounded-xl shadow">
                            <h3 className="text-md font-semibold text-[#2980b9]">Snack Pack #3</h3>
                            <p>For JAIN center Pathshala students and parents!</p>
                        </div>
                    </div>

                    <p className="font-bold text-center mt-4 text-[#e67e22]">Click below to RSVP for Swamivatsalya</p>

                    {/* Form */}
                    {loading ? (
                        <div className="text-center mt-6">
                            <div className="loader mb-4 mx-auto border-4 border-yellow-400 border-t-transparent rounded-full w-10 h-10 animate-spin"></div>
                            <p className="text-yellow-700 font-medium">Loading form...</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
                            <div className="flex justify-center gap-4">
                                {['Yes', 'No'].map((resp) => (
                                    <button
                                        key={resp}
                                        type="button"
                                        onClick={() => handleChange('Response', resp)}
                                        className={`px-5 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-200 ${formData.Response === resp
                                            ? resp === 'Yes'
                                                ? 'bg-green-600 text-white'
                                                : 'bg-red-500 text-white'
                                            : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                                            }`}
                                        disabled={submitted}
                                    >
                                        {resp}
                                    </button>
                                ))}
                            </div>

                            {fields.map((field, index) => (
                                <div key={index}>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">{field.label}</label>

                                    {(field.type === 'text' || field.type === 'number') && (
                                        <input
                                            type={field.type}
                                            value={formData[field.label] || ''}
                                            onChange={(e) => handleChange(field.label, e.target.value)}
                                            className="w-full border border-yellow-300 rounded-lg text-black px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                                            disabled={submitted}
                                        />
                                    )}

                                    {field.type === 'checkbox-single' && (
                                        <div className="space-y-2">
                                            {field.options.map((option, i) => (
                                                <label key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                                    <input
                                                        type="radio"
                                                        name={field.label}
                                                        value={option}
                                                        checked={formData[field.label] === option}
                                                        onChange={() => handleChange(field.label, option)}
                                                        disabled={submitted}
                                                    />
                                                    <span>{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    )}

                                    {field.type === 'checkbox-multiple' && (
                                        <div className="space-y-2">
                                            {field.options.map((option, i) => (
                                                <label key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                                    <input
                                                        type="checkbox"
                                                        value={option}
                                                        checked={formData[field.label]?.includes(option)}
                                                        onChange={(e) => {
                                                            const prev = formData[field.label] || [];
                                                            const updated = e.target.checked
                                                                ? [...prev, option]
                                                                : prev.filter((o) => o !== option);
                                                            handleChange(field.label, updated);
                                                        }}
                                                        disabled={submitted}
                                                    />
                                                    <span>{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <button
                                type="submit"
                                disabled={!formData.Response || submitted}
                                className={`w-full py-3 rounded-lg font-bold text-white text-sm transition-all duration-300 shadow-lg ${formData.Response ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-gray-300 cursor-not-allowed'
                                    }`}
                            >
                                {submitted ? '🎉 RSVP Submitted' : 'Submit RSVP'}
                            </button>
                        </form>
                    )}

                    {status && (
                        <p
                            className={`mt-4 text-center text-sm font-semibold ${status.includes('success') ? 'text-green-600' : 'text-red-600'
                                }`}
                        >
                            {status}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
