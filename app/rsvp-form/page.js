'use client';

import { useState, useEffect } from 'react';

export default function RSVPForm() {
    const [email, setEmail] = useState('');
    const [response, setResponse] = useState('');
    const [status, setStatus] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        const decodedEmail = token ? atob(token) : null;
        setEmail(decodedEmail);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        const sheetId = new URLSearchParams(window.location.search).get('sheetId');

        try {
            const res = await fetch('/api/rsvp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, response, sheetId }),
            });

            const data = await res.json();

            if (data.message) {
                setStatus('✅ RSVP submitted successfully!');
                setSubmitted(true);
            } else {
                setStatus('❌ Error: Could not submit RSVP.');
            }
        } catch (error) {
            console.error(error);
            setStatus('❌ Error: Submission failed.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-center text-indigo-700 mb-3">You're Invited!</h2>
                <p className="text-center text-gray-600 mb-1">
                    We’re excited to have you! Please let us know if you’ll be attending.
                </p>
                <p className="text-center text-sm text-gray-500">
                    Invitation sent to: <span className="font-medium text-indigo-600">{email || 'your email'}</span>
                </p>
                <p className="text-center text-xs text-gray-400 mb-6">From: Harsh Kumar</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex justify-center gap-4">
                        <button
                            type="button"
                            onClick={() => setResponse('Yes')}
                            className={`px-5 py-2 rounded-full transition-all duration-200 font-medium ${response === 'Yes'
                                ? 'bg-green-600 text-white'
                                : 'bg-green-100 text-green-700 hover:bg-green-200'
                                }`}
                            disabled={submitted}
                        >
                            Yes
                        </button>
                        <button
                            type="button"
                            onClick={() => setResponse('No')}
                            className={`px-5 py-2 rounded-full transition-all duration-200 font-medium ${response === 'No'
                                ? 'bg-red-600 text-white'
                                : 'bg-red-100 text-red-700 hover:bg-red-200'
                                }`}
                            disabled={submitted}
                        >
                            No
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={!response || submitted}
                        className={`w-full py-2 rounded-lg transition-all duration-200 text-white font-semibold ${response
                            ? 'bg-indigo-600 hover:bg-indigo-700'
                            : 'bg-gray-400 cursor-not-allowed'
                            }`}
                    >
                        {submitted ? 'Submitted' : 'Submit RSVP'}
                    </button>
                </form>

                {status && (
                    <p
                        className={`mt-4 text-center text-sm font-medium ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'
                            }`}
                    >
                        {status}
                    </p>
                )}
            </div>
        </div>
    );
}
