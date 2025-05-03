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
        <div
            className="flex items-center justify-center min-h-screen px-4 bg-[#FEF3E2]"
            style={{
                backgroundImage: "url(https://kidzzkreations.com/wp-content/uploads/2022/06/kidzz-blog-bg@4x-1.png)",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
            }}
        >
            {loading ? (
                <div className="text-center">
                    <div className="loader mb-4 mx-auto border-4 border-yellow-400 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
                    <p className="text-yellow-700 font-medium">Loading form...</p>
                </div>
            ) : (
                <div className="w-full max-w-xl p-8 bg-white rounded-3xl shadow-2xl border border-yellow-200">
                    <h2 className="text-4xl font-bold text-center text-yellow-700 mb-2" style={{ fontFamily: 'cursive' }}>You&apos;re Invited!</h2>
                    <p className="text-center text-gray-700 text-base mb-1">We&apos;d love to know if you&apos;ll be there.</p>
                    <p className="text-center text-xs text-gray-500 mb-6 italic">
                        Invitation sent to: <span className="text-yellow-700">{email}</span>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex justify-center gap-6">
                            {['Yes', 'No'].map((resp) => (
                                <button
                                    key={resp}
                                    type="button"
                                    onClick={() => handleChange('Response', resp)}
                                    className={`px-6 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-200 ${formData.Response === resp
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
                                            <label key={i} className="flex items-center gap-2  text-gray-700 text-sm">
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
                            className={`w-full py-3 rounded-lg font-bold text-white text-sm transition-all duration-300 shadow-lg ${formData.Response
                                ? 'bg-yellow-600 hover:bg-yellow-700'
                                : 'bg-gray-300 cursor-not-allowed'
                                }`}
                        >
                            {submitted ? '🎉 RSVP Submitted' : 'Submit RSVP'}
                        </button>
                    </form>

                    {status && (
                        <p className={`mt-5 text-center text-sm font-semibold ${status.includes('success') ? 'text-green-600' : 'text-red-600'
                            }`}>
                            {status}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}





// return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
//         {loading ? (
//             <div className="text-center">
//                 <div className="loader mb-4 mx-auto border-4 border-indigo-600 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
//                 <p className="text-gray-700 font-medium">Loading form...</p>
//             </div>
//         ) : (
//             <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
//                 <h2 className="text-3xl font-bold text-center text-indigo-700 mb-3">You are Invited!</h2>
//                 <p className="text-center text-gray-600 mb-1">
//                     We sincerely hope you can attend —Kindly let us know if you will be joining us.
//                 </p>
//                 <p className="text-center text-sm text-gray-500 mb-6">
//                     Sent to: <span className="font-medium text-indigo-600">{email}</span>
//                 </p>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     {/* Yes / No Buttons */}
//                     <div className="flex justify-center gap-4">
//                         <button
//                             type="button"
//                             onClick={() => handleChange('Response', 'Yes')}
//                             className={`px-5 py-2 rounded-full transition-all font-medium ${formData.Response === 'Yes'
//                                 ? 'bg-green-600 text-white'
//                                 : 'bg-green-100 text-green-700 hover:bg-green-200'
//                                 }`}
//                             disabled={submitted}
//                         >
//                             Yes
//                         </button>
//                         <button
//                             type="button"
//                             onClick={() => handleChange('Response', 'No')}
//                             className={`px-5 py-2 rounded-full transition-all font-medium ${formData.Response === 'No'
//                                 ? 'bg-red-600 text-white'
//                                 : 'bg-red-100 text-red-700 hover:bg-red-200'
//                                 }`}
//                             disabled={submitted}
//                         >
//                             No
//                         </button>
//                     </div>


//                     {fields.map((field, index) => (


//                         <div key={index} className="mb-4">
//                             <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>

//                             {field.type === 'text' || field.type === 'number' ? (
//                                 <input
//                                     type={field.type}
//                                     value={formData[field.label] || ''}
//                                     onChange={(e) => handleChange(field.label, e.target.value)}
//                                     className="w-full border text-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                                     disabled={submitted}
//                                 />
//                             ) : null}

//                             {field.type === 'checkbox-single' && (
//                                 <div className="space-y-2">
//                                     {field.options.map((option, i) => (
//                                         <label key={i} className="flex items-center text-black space-x-2">
//                                             <input
//                                                 type="radio"
//                                                 name={field.label}
//                                                 value={option}
//                                                 checked={formData[field.label] === option}
//                                                 onChange={() => handleChange(field.label, option)}
//                                                 className='text-black'
//                                                 disabled={submitted}
//                                             />
//                                             <span>{option}</span>
//                                         </label>
//                                     ))}
//                                 </div>
//                             )}

//                             {field.type === 'checkbox-multiple' && (
//                                 <div className="space-y-2">
//                                     {field.options.map((option, i) => (
//                                         <label key={i} className="flex items-center text-black space-x-2">
//                                             <input
//                                                 type="checkbox"
//                                                 value={option}
//                                                 checked={formData[field.label]?.includes(option)}
//                                                 onChange={(e) => {
//                                                     const prev = formData[field.label] || [];
//                                                     const updated = e.target.checked
//                                                         ? [...prev, option]
//                                                         : prev.filter(o => o !== option);
//                                                     handleChange(field.label, updated);
//                                                 }}
//                                                 disabled={submitted}
//                                             />
//                                             <span>{option}</span>
//                                         </label>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     ))}


//                     <button
//                         type="submit"
//                         disabled={!formData.Response || submitted}
//                         className={`w-full py-2 rounded-lg text-white font-semibold transition-all ${formData.Response
//                             ? 'bg-indigo-600 hover:bg-indigo-700'
//                             : 'bg-gray-400 cursor-not-allowed'
//                             }`}
//                     >
//                         {submitted ? 'Submitted' : 'Submit RSVP'}
//                     </button>
//                 </form>

//                 {status && (
//                     <p className={`mt-4 text-center text-sm font-medium ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
//                         {status}
//                     </p>
//                 )}
//             </div>
//         )}
//     </div>
// );