'use client';

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
        const sheetName = urlParams.get('sheetName');

        if (token && id && sheetName) {
            fetch(`https://script.google.com/macros/s/AKfycbyt4EjDYEKCwCRXufIYFC97x9yVm4KapWLMtlodMC5bY2VhefTa_6gO4GN8rPrMRsb1/exec?token=${token}&sheetId=${id}&sheetName=${sheetName}`)
                .then(res => res.json())
                .then(data => {
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

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setStatus('Submitting...');

    //     const payload = {
    //         email,
    //         sheetId,
    //         response: formData.Response || '',
    //         fields: {
    //             ...formData,
    //             Response: formData.Response,
    //         },
    //     };

    //     try {
    //         const res = await fetch('/api/rsvp', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(payload),
    //         });

    //         const data = await res.json();
    //         if (data.message) {
    //             setStatus('✅ RSVP submitted successfully!');
    //             setSubmitted(true);
    //         } else {
    //             setStatus('❌ Error: Could not submit RSVP.');
    //         }
    //     } catch (err) {
    //         console.error(err);
    //         setStatus('❌ Submission failed.');
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        const payload = {
            action: "updateResponse",
            sheetId,
            email,
            responses: formData,
        };

        try {
            const res = await fetch(process.env.NEXT_PUBLIC_GSCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (data.status === "success") {
                setStatus('✅ RSVP submitted successfully!');
                setSubmitted(true);
            } else {
                setStatus(`❌ Error: ${data.message}`);
            }
        } catch (err) {
            console.error(err);
            setStatus('❌ Submission failed.');
        }
    };
    console.log("field", fields);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
            {loading ? (
                <div className="text-center">
                    <div className="loader mb-4 mx-auto border-4 border-indigo-600 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
                    <p className="text-gray-700 font-medium">Loading form...</p>
                </div>
            ) : (
                <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
                    <h2 className="text-3xl font-bold text-center text-indigo-700 mb-3">You're Invited!</h2>
                    <p className="text-center text-gray-600 mb-1">
                        Please confirm your attendance.
                    </p>
                    <p className="text-center text-sm text-gray-500 mb-6">
                        Sent to: <span className="font-medium text-indigo-600">{email}</span>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Yes / No Buttons */}
                        <div className="flex justify-center gap-4">
                            <button
                                type="button"
                                onClick={() => handleChange('Response', 'Yes')}
                                className={`px-5 py-2 rounded-full transition-all font-medium ${formData.Response === 'Yes'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                                    }`}
                                disabled={submitted}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                onClick={() => handleChange('Response', 'No')}
                                className={`px-5 py-2 rounded-full transition-all font-medium ${formData.Response === 'No'
                                    ? 'bg-red-600 text-white'
                                    : 'bg-red-100 text-red-700 hover:bg-red-200'
                                    }`}
                                disabled={submitted}
                            >
                                No
                            </button>
                        </div>

                        {/* Dynamic Questions */}
                        {/* {fields.map(field => (
                        <div key={field}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{field}</label>
                            <input
                                type="text"
                                value={formData[field] || ''}
                                onChange={(e) => handleChange(field, e.target.value)}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                disabled={submitted}
                            />
                        </div>
                    ))} */}

                        {fields.map((field, index) => (


                            <div key={index} className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>

                                {field.type === 'text' || field.type === 'number' ? (
                                    <input
                                        type={field.type}
                                        value={formData[field.label] || ''}
                                        onChange={(e) => handleChange(field.label, e.target.value)}
                                        className="w-full border text-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        disabled={submitted}
                                    />
                                ) : null}

                                {field.type === 'checkbox-single' && (
                                    <div className="space-y-2">
                                        {field.options.map((option, i) => (
                                            <label key={i} className="flex items-center text-black space-x-2">
                                                <input
                                                    type="radio"
                                                    name={field.label}
                                                    value={option}
                                                    checked={formData[field.label] === option}
                                                    onChange={() => handleChange(field.label, option)}
                                                    className='text-black'
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
                                            <label key={i} className="flex items-center text-black space-x-2">
                                                <input
                                                    type="checkbox"
                                                    value={option}
                                                    checked={formData[field.label]?.includes(option)}
                                                    onChange={(e) => {
                                                        const prev = formData[field.label] || [];
                                                        const updated = e.target.checked
                                                            ? [...prev, option]
                                                            : prev.filter(o => o !== option);
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
                            className={`w-full py-2 rounded-lg text-white font-semibold transition-all ${formData.Response
                                ? 'bg-indigo-600 hover:bg-indigo-700'
                                : 'bg-gray-400 cursor-not-allowed'
                                }`}
                        >
                            {submitted ? 'Submitted' : 'Submit RSVP'}
                        </button>
                    </form>

                    {status && (
                        <p className={`mt-4 text-center text-sm font-medium ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                            {status}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}
