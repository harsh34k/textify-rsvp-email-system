// 'use client';

// import Tiptap from "@/components/TipTap";
// import axios from "axios";
// import { useState } from "react";

// function Dashboard() {
//   const [sheetLink, setSheetLink] = useState("");
//   const [subject, setSubject] = useState("You're Invited! RSVP Now for Our Exclusive Event 🎉");
//   //   const [template, setTemplate] = useState(`
//   //     <div style="background: linear-gradient(45deg, #656565, #7f42a7, #6600c5, #5300a0, #757575); padding: 32px; border-radius: 16px; font-family: 'Segoe UI', sans-serif; color: #ffffff; max-width: 600px; margin: auto; border: 1px solid rgba(255, 255, 255, 0.2);">
//   //   <h1 style="font-size: 28px; text-align: center; margin-bottom: 20px;">Mahaveer Swami Janma Kalyanak</h1>

//   //   <p style="font-size: 16px; line-height: 1.5;">Hi {{Name}},</p>
//   //   <p style="font-size: 16px; line-height: 1.5;">
//   //     You're warmly invited to celebrate this auspicious day with us on <strong>Sunday, April 27th, 2025</strong>!
//   //   </p>

//   //   <div style="text-align: center; margin: 20px 0;">
//   //     <img src="https://media-hosting.imagekit.io/46f39181d1e9401f/mahaveer.png?Expires=1840946666&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GtDJpS9yWVsni~Yi5RwClbJqIBP3KiuRuPQbdaaYWzZDCEQq3Deqsqe5I3kvZLzVhwk2kLL1CHfkOorgOyMUgvTKWz-ytECq5HrX5urTL6yE3W0YITkHPqi0nHI9pQ~ZDXKQnghn781RFmPJdRfAwgm-jkbVb7YfMRS8dkH4E~WdlfUHRiSx3~axEHZjfa7c0TSba2II9dx2BeUcxT5uu2-zxMqWbLrfuQ957JTModJQvgQI-BKG1qOeVVya4jDxcDAhq10DpPSR6ohAKhipQPKzeP2okqBJR1SLfqD-Q1wcboWkhvuK835jbYeYi4M8rMDOA5Pt64-n4WNqJMLkng__" alt="Mahaveer Swami" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" />
//   //   </div>

//   //   <div style="background: rgba(255, 255, 255, 0.1); padding: 16px; border-radius: 12px; margin-top: 20px;">
//   //     <h2 style="font-size: 18px; margin-bottom: 10px;">✨ Activities:</h2>
//   //     <ul style="padding-left: 20px; line-height: 1.6;">
//   //       <li>Group discussions</li>
//   //       <li>Fun learning activities</li>
//   //       <li>Swamivatsalya</li>
//   //     </ul>
//   //   </div>

//   //   <div style="text-align: center; margin: 30px 0;">
//   //     <h2> Click Here to RSVP {{RSVP_Link}}</h2>
//   //   </div>

//   //   <p style="font-size: 14px; text-align: center; color: #ddd;">Looking forward to seeing you there!</p>
//   // </div>
//   // `);
//   const [template, setTemplate] = useState(`
//     <div style="background: #FFF9EF; padding: 24px; font-family: 'Segoe UI', sans-serif; color: #333333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">

//         <img src="https://media-hosting.imagekit.io/13023b84004842f7/banner.png?Expires=1840946599&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yVoordsjrFTMTkKlySkgzPgNfqBLIMYK~FYk-I~hFscyQjm5Pi4QlekDuVFn~lX0FRdRL4wQDSu1peCN-~-W4KmSyZYaql2jtzGSsbTwvzu2Mfr0Pt7t8rENUGETFHudX~nVnUpR4mlNc14qV2naZs0pDQWpR6CHp96~O4Qcbpl79XVE7dLdcWWgFlU1fqZkjHQKejCK98Sm2QYxYG52t~v-RF3Io0TDJ7wNOKOIf1MTL8QN1TQUsRSXvqsmRRUvDFCgigSVAayOPPLto45foW-hcjKplvb-hVO~uYf4YY4FO4PsXFVMz66GwUjXUyIT3u97-PtXP3m5Gy9zc-j7Mg__" alt="Event Header" style="max-width: 100%; height: auto; margin-bottom: 20px;" />

//       <div style="text-align: center;">
//         <img src="https://media-hosting.imagekit.io/46f39181d1e9401f/mahaveer.png?Expires=1840946666&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GtDJpS9yWVsni~Yi5RwClbJqIBP3KiuRuPQbdaaYWzZDCEQq3Deqsqe5I3kvZLzVhwk2kLL1CHfkOorgOyMUgvTKWz-ytECq5HrX5urTL6yE3W0YITkHPqi0nHI9pQ~ZDXKQnghn781RFmPJdRfAwgm-jkbVb7YfMRS8dkH4E~WdlfUHRiSx3~axEHZjfa7c0TSba2II9dx2BeUcxT5uu2-zxMqWbLrfuQ957JTModJQvgQI-BKG1qOeVVya4jDxcDAhq10DpPSR6ohAKhipQPKzeP2okqBJR1SLfqD-Q1wcboWkhvuK835jbYeYi4M8rMDOA5Pt64-n4WNqJMLkng__" alt="Event Header" style="max-width: 100%; height: 10rem; margin-bottom: 20px;" />
//       </div>

//       <h2 style="color: #b30000; text-align: center;">Mahaveer Swami Janma Kalyanak Celebration</h2>
//       <p style="text-align: center; font-size: 16px; margin: 8px 0;"><strong>Sunday, April 27th, 2025</strong></p>
//       <p style="font-size: 15px;">Hi {{Name}},</p>

//       <p>You're warmly invited to celebrate the auspicious occasion of <strong>Mahaveer Swami Janma Kalyanak</strong> with us!</p>
//       <p>We’ll gather at <strong>10:00 AM sharp</strong> for Bhakti, Aarti, and a day full of cultural programs and celebration.</p>

//       <hr style="margin: 20px 0;" />

//       <h3 style="color: #006600;">🎉 Program Highlights:</h3>
//       <ul style="line-height: 1.6; padding-left: 20px;">
//         <li><strong>Snatak Pooja</strong> &ndash; With kids participating in pooja and mantra recitation</li>
//         <li><strong>Snack Pack #1</strong> &ndash; 13 layered sandwich + dhokla</li>
//         <li><strong>Snack Pack #2</strong> &ndash; Khaman + Jalebi</li>
//         <li><strong>Snack Pack #3</strong> &ndash; Tikki Chaat + Thepla Roll</li>
//       </ul>

//       <p>We’ll also recognize Jain Pathshala students and Jain Center volunteers.</p>

//       <div style="text-align: center; margin: 30px 0;">
//         <h2> Click Here to RSVP {{RSVP_Link}}</h2>
//       </div>

//       <p style="font-size: 14px; text-align: center; margin-top: 30px;">
//         Thank you for your continued support. <br/>
//         <strong>Jai Jinendra!</strong>
//       </p>

//       <div style="text-align: center; font-size: 12px; color: #777; margin-top: 20px;">
//         Jain Center of America<br/>
//         123 Main Street, New York, NY · <a href="mailto:info@jaincenter.org">info@jaincenter.org</a><br/>
//         Follow us: <a href="#">Facebook</a> | <a href="#">Instagram</a>
//       </div install @tiptap/react @tiptap/starter-kit @tiptap/extension-image
// v>
//     </div>
//   `);

//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("");
//   const [customFields, setCustomFields] = useState([
//     { label: "", type: "text", options: [] }
//   ]);


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus("");

//     const sheetIdMatch = sheetLink.match(/\/d\/([a-zA-Z0-9-_]+)/);
//     const sheetId = sheetIdMatch ? sheetIdMatch[1] : null;

//     if (!sheetId) {
//       alert("Invalid Google Sheet Link. Please provide a correct link.");
//       setLoading(false);
//       return;
//     }
//     console.log(sheetId, template, subject, customFields);
//     console.log("Custom Fields", customFields);



//     try {
//       const response = await axios.post(
//         process.env.NEXT_PUBLIC_GSCRIPT_URL,
//         { sheetId, template, subject, customFields },
//         {
//           headers: {
//             'Content-Type': 'text/plain;charset=utf-8',
//           }
//         }
//       );
//       console.log("response", response);
//       setStatus("sent");
//     } catch (error) {
//       console.error('Error:', error);
//       console.log("error", error.response.data);

//       setStatus("error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4" aria-hidden="false">
//       <div className="w-full max-w-xl p-8 space-y-6 bg-white rounded-2xl shadow-xl">
//         <h2 className="text-3xl font-bold text-center text-indigo-700">Submit Your Google Sheet</h2>

//         <div className="space-y-3">
//           <p className="text-sm text-gray-600 text-center">
//             📋 Please make sure your Google Sheet contains the following columns:
//             <br />
//             <span className="font-semibold text-gray-800">Name, Email, Template, Email Status, Responded,Response</span>
//           </p>

//           <div className="w-full border rounded-lg overflow-hidden ">
//             <img
//               src="/excel-preview.png"
//               alt="Google Sheet Example"
//               className="w-full t-scale object-cover"
//             />
//           </div>
//         </div>
//         <div>
//           <p className="text-sm text-gray-600 text-center">
//             Have a look at our <a href="https://docs.google.com/spreadsheets/d/1J3Z9g3RWVcmikdmERmxV-8tg2wrM786HUFqJ0i02qog/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Google Sheet Template</a> for reference.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5 pt-2">
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Google Sheet Link</label>
//             <input
//               type="url"
//               placeholder="https://docs.google.com/..."
//               value={sheetLink}
//               onChange={(e) => setSheetLink(e.target.value)}
//               required
//               className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Email Subject</label>
//             <input
//               type="text"
//               placeholder="You're Invited!"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               required
//               className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>

//           {/* <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Email Template</label>
//             <textarea
//               placeholder="Hi {{Name}}, you're invited..."
//               value={template}
//               onChange={(e) => setTemplate(e.target.value)}
//               rows={6}
//               className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
//             />
//             <p className="text-xs text-gray-500 mt-1">
//               Use placeholders like <code className="bg-gray-200 p-1 rounded">{"{{ Name }}"}</code> and <code className="bg-gray-200 p-1 rounded">{"{{ RSVP_Link }}"}</code> in your template.
//             </p>
//           </div> */}
//           <Tiptap />

//           {/* Custom RSVP Fields */}
//           <div className="space-y-4">
//             <label className="text-md font-semibold text-indigo-600">Custom RSVP Fields (Optional)</label>

//             {customFields.map((field, index) => (
//               <div key={index} className="bg-gray-50 p-4 border rounded-lg space-y-2">
//                 <input
//                   type="text"
//                   placeholder="Field label (e.g. Phone Number)"
//                   value={field.label}
//                   onChange={(e) => {
//                     const updated = [...customFields];
//                     updated[index].label = e.target.value;
//                     setCustomFields(updated);
//                   }}
//                   className="w-full px-3 text-black py-2 border rounded"
//                 />

//                 <select
//                   value={field.type}
//                   onChange={(e) => {
//                     const updated = [...customFields];
//                     updated[index].type = e.target.value;
//                     // Reset options if checkbox type selected
//                     if (e.target.value.startsWith('checkbox')) {
//                       updated[index].options = ["Option 1"];
//                     } else {
//                       updated[index].options = [];
//                     }
//                     setCustomFields(updated);
//                   }}
//                   className="w-full px-3 py-2 border text-black rounded"
//                 >
//                   <option value="text">Text</option>
//                   <option value="number">Number</option>
//                   <option value="checkbox-multiple">Checkbox (Multiple Select)</option>
//                   <option value="checkbox-single">Checkbox (Single Select)</option>
//                 </select>


//                 {(field.type === "checkbox-multiple" || field.type === "checkbox-single") && (
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-600">Options</label>
//                     {field.options.map((opt, optIdx) => (
//                       <div key={optIdx} className="flex gap-2 items-center">
//                         <input
//                           type="text"
//                           placeholder={`Option ${optIdx + 1}`}
//                           value={opt}
//                           onChange={(e) => {
//                             const updated = [...customFields];
//                             updated[index].options[optIdx] = e.target.value;
//                             setCustomFields(updated);
//                           }}
//                           className="flex-1 px-3 py-2 text-black border rounded"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => {
//                             const updated = [...customFields];
//                             updated[index].options.splice(optIdx, 1);
//                             setCustomFields(updated);
//                           }}
//                           className="text-red-500 text-sm"
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     ))}

//                     <button
//                       type="button"
//                       onClick={() => {
//                         const updated = [...customFields];
//                         updated[index].options.push(`Option ${field.options.length + 1}`);
//                         setCustomFields(updated);
//                       }}
//                       className="text-indigo-600 text-sm"
//                     >
//                       + Add Option
//                     </button>
//                   </div>
//                 )}


//                 <button
//                   type="button"
//                   onClick={() => {
//                     const updated = [...customFields];
//                     updated.splice(index, 1);
//                     setCustomFields(updated);
//                   }}
//                   className="text-red-500 text-sm underline"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}

//             <button
//               type="button"
//               onClick={() =>
//                 setCustomFields([...customFields, { label: "", type: "text", options: [] }])
//               }
//               className="text-indigo-600 font-medium text-sm"
//             >
//               + Add Field
//             </button>
//           </div>


//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full px-4 py-2 text-white rounded-lg transition-all duration-200 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
//           >
//             {loading ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Submit'}
//           </button>

//           {status === 'error' && (
//             <p className="text-center text-red-500 text-sm">Something went wrong. Please try again.</p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// 'use client';

// import Tiptap from "@/components/TipTap";
// import axios from "axios";
// import { useRef, useState } from "react";
// import { CldUploadButton, CldImage, getCldImageUrl } from 'next-cloudinary';
// import BundledEditor from "@/components/editor/minimal-tiptap/BundledEditor";

// function Dashboard() {
//   const [sheetLink, setSheetLink] = useState("");
//   const [subject, setSubject] = useState("You're Invited! RSVP Now for Our Exclusive Event 🎉");
//   const [editorContent, setEditorContent] = useState('');
//   const editorRef = useRef(null);
//   const [template, setTemplate] = useState(`
//     <div style="background: #FFF9EF; padding: 24px; font-family: 'Segoe UI', sans-serif; color: #333333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">

//         <img src="https://media-hosting.imagekit.io/13023b84004842f7/banner.png?Expires=1840946599&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yVoordsjrFTMTkKlySkgzPgNfqBLIMYK~FYk-I~hFscyQjm5Pi4QlekDuVFn~lX0FRdRL4wQDSu1peCN-~-W4KmSyZYaql2jtzGSsbTwvzu2Mfr0Pt7t8rENUGETFHudX~nVnUpR4mlNc14qV2naZs0pDQWpR6CHp96~O4Qcbpl79XVE7dLdcWWgFlU1fqZkjHQKejCK98Sm2QYxYG52t~v-RF3Io0TDJ7wNOKOIf1MTL8QN1TQUsRSXvqsmRRUvDFCgigSVAayOPPLto45foW-hcjKplvb-hVO~uYf4YY4FO4PsXFVMz66GwUjXUyIT3u97-PtXP3m5Gy9zc-j7Mg__" alt="Event Header" style="max-width: 100%; height: auto; margin-bottom: 20px;" />

//       <div style="text-align: center;">
//         <img src="https://media-hosting.imagekit.io/46f39181d1e9401f/mahaveer.png?Expires=1840946666&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GtDJpS9yWVsni~Yi5RwClbJqIBP3KiuRuPQbdaaYWzZDCEQq3Deqsqe5I3kvZLzVhwk2kLL1CHfkOorgOyMUgvTKWz-ytECq5HrX5urTL6yE3W0YITkHPqi0nHI9pQ~ZDXKQnghn781RFmPJdRfAwgm-jkbVb7YfMRS8dkH4E~WdlfUHRiSx3~axEHZjfa7c0TSba2II9dx2BeUcxT5uu2-zxMqWbLrfuQ957JTModJQvgQI-BKG1qOeVVya4jDxcDAhq10DpPSR6ohAKhipQPKzeP2okqBJR1SLfqD-Q1wcboWkhvuK835jbYeYi4M8rMDOA5Pt64-n4WNqJMLkng__" alt="Event Header" style="max-width: 100%; height: 10rem; margin-bottom: 20px;" />
//       </div>

//       <h2 style="color: #b30000; text-align: center;">Mahaveer Swami Janma Kalyanak Celebration</h2>
//       <p style="text-align: center; font-size: 16px; margin: 8px 0;"><strong>Sunday, April 27th, 2025</strong></p>
//       <p style="font-size: 15px;">Hi {{Name}},</p>

//       <p>You're warmly invited to celebrate the auspicious occasion of <strong>Mahaveer Swami Janma Kalyanak</strong> with us!</p>
//       <p>We'll gather at <strong>10:00 AM sharp</strong> for Bhakti, Aarti, and a day full of cultural programs and celebration.</p>

//       <hr style="margin: 20px 0;" />

//       <h3 style="color: #006600;">🎉 Program Highlights:</h3>
//       <ul style="line-height: 1.6; padding-left: 20px;">
//         <li><strong>Snatak Pooja</strong> &ndash; With kids participating in pooja and mantra recitation</li>
//         <li><strong>Snack Pack #1</strong> &ndash; 13 layered sandwich + dhokla</li>
//         <li><strong>Snack Pack #2</strong> &ndash; Khaman + Jalebi</li>
//         <li><strong>Snack Pack #3</strong> &ndash; Tikki Chaat + Thepla Roll</li>
//       </ul>

//       <p>We'll also recognize Jain Pathshala students and Jain Center volunteers.</p>

//       <div style="text-align: center; margin: 30px 0;">
//         <h2> Click Here to RSVP {{RSVP_Link}}</h2>
//       </div>

//       <p style="font-size: 14px; text-align: center; margin-top: 30px;">
//         Thank you for your continued support. <br/>
//         <strong>Jai Jinendra!</strong>
//       </p>

//       <div style="text-align: center; font-size: 12px; color: #777; margin-top: 20px;">
//         Jain Center of America<br/>
//         123 Main Street, New York, NY · <a href="mailto:info@jaincenter.org">info@jaincenter.org</a><br/>
//         Follow us: <a href="#">Facebook</a> | <a href="#">Instagram</a>
//       </div>
//     </div>
//   `);

//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("");
//   const [customFields, setCustomFields] = useState([
//     { label: "", type: "text", options: [] }
//   ]);
//   const [uploadedImages, setUploadedImages] = useState([]);

//   // const handleImageUpload = (result) => {
//   //   if (result?.info?.public_id) {
//   //     const imageUrl = getCldImageUrl({
//   //       width: 800,
//   //       height: 600,
//   //       src: result.info.public_id,
//   //       crop: 'fill',
//   //       quality: 'auto'
//   //     });

//   //     // Insert image into Tiptap editor
//   //     if (window.tiptapEditor) {
//   //       window.tiptapEditor
//   //         .chain()
//   //         .focus()
//   //         .setImage({ src: imageUrl })
//   //         .run();
//   //     }

//   //     // Store the uploaded image
//   //     setUploadedImages(prev => [...prev, {
//   //       publicId: result.info.public_id,
//   //       url: imageUrl,
//   //       width: result.info.width,
//   //       height: result.info.height
//   //     }]);
//   //   }
//   // };

//   // const removeImage = (index) => {
//   //   setUploadedImages(prev => prev.filter((_, i) => i !== index));
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus("");

//     const sheetIdMatch = sheetLink.match(/\/d\/([a-zA-Z0-9-_]+)/);
//     const sheetId = sheetIdMatch ? sheetIdMatch[1] : null;

//     if (!sheetId) {
//       alert("Invalid Google Sheet Link. Please provide a correct link.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         process.env.NEXT_PUBLIC_GSCRIPT_URL,
//         {
//           sheetId,
//           template,
//           subject,
//           customFields,
//           uploadedImages
//         },
//         {
//           headers: {
//             'Content-Type': 'text/plain;charset=utf-8',
//           }
//         }
//       );
//       setStatus("sent");
//     } catch (error) {
//       console.error('Error:', error);
//       setStatus("error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4" aria-hidden="false">
//       <div className="w-full max-w-4xl p-8 space-y-6 bg-white rounded-2xl shadow-xl">
//         <h2 className="text-3xl font-bold text-center text-indigo-700">Submit Your Google Sheet</h2>

//         <div className="space-y-3">
//           <p className="text-sm text-gray-600 text-center">
//             📋 Please make sure your Google Sheet contains the following columns:
//             <br />
//             <span className="font-semibold text-gray-800">Name, Email, Template, Email Status, Responded,Response</span>
//           </p>

//           <div className="w-full border rounded-lg overflow-hidden">
//             <img
//               src="/excel-preview.png"
//               alt="Google Sheet Example"
//               className="w-full t-scale object-cover"
//             />
//           </div>
//         </div>

//         <div>
//           <p className="text-sm text-gray-600 text-center">
//             Have a look at our <a href="https://docs.google.com/spreadsheets/d/1J3Z9g3RWVcmikdmERmxV-8tg2wrM786HUFqJ0i02qog/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Google Sheet Template</a> for reference.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5 pt-2">
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Google Sheet Link</label>
//             <input
//               type="url"
//               placeholder="https://docs.google.com/..."
//               value={sheetLink}
//               onChange={(e) => setSheetLink(e.target.value)}
//               required
//               className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Email Subject</label>
//             <input
//               type="text"
//               placeholder="You're Invited!"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               required
//               className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>

//           {/* Image Upload Section */}
//           {/* <div className="space-y-4">
//             <label className="text-md font-semibold text-indigo-600">Upload Images</label>
//             <div className="space-y-4">
//               <CldUploadButton
//                 uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
//                 onSuccess={handleImageUpload}
//                 options={{
//                   multiple: true,
//                   sources: ['local'],
//                   maxFiles: 10,
//                   resourceType: 'image'
//                 }}
//                 className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
//               >
//                 Upload Images
//               </CldUploadButton>

//               <p className="text-sm text-gray-500">
//                 Uploaded images will automatically appear in the editor below.
//               </p>
//             </div>
//           </div> */}

//           {/* <Tiptap onInit={(editor) => {
//             window.tiptapEditor = editor;
//             setEditorContent(editor.getHTML());
//           }}
//             onChange={(html) => setEditorContent(html)}
//             initialContent={template} /> */}
//           {/* <BundledEditor
//             onInit={(_evt, editor) => editorRef.current = editor}
//             initialValue='<p>This is the initial content of the editor.</p>'
//             init={{
//               height: 500,
//               menubar: false,
//               plugins: [
//                 'a11ychecker', 'advlist', 'anchor', 'autolink', 'help', 'link', 'lists',
//                 'image', 'editimage', 'tinydrive', 'media', 'powerpaste', 'preview',
//                 'searchreplace', 'table', 'wordcount'
//               ],
//               toolbar: 'insertfile a11ycheck undo redo | bold italic | forecolor backcolor | codesample | alignleft aligncenter alignright alignjustify | bullist numlist | link image',
//               spellchecker_dialog: true,
//               spellchecker_ignore_list: ['Ephox', 'Moxiecode'],
//               tinydrive_demo_files_url: '../_images/tiny-drive-demo/demo_files.json',
//               tinydrive_token_provider: (success, failure) => {
//                 success({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb2huZG9lIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ks_BdfH4CWilyzLNk8S2gDARFhuxIauLa8PwhdEQhEo' });
//               },
//               content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'

//             }}
//           /> */}
//           {/* <BundledEditor
//             onInit={(_evt, editor) => editorRef.current = editor}
//             initialValue='<p>This is the initial content of the editor.</p>'
//             init={{
//               height: 500,
//               menubar: false,
//               plugins: [
//                 'a11ychecker', 'advlist', 'anchor', 'autolink', 'help', 'link', 'lists',
//                 'image', 'editimage', 'media', 'powerpaste', 'preview',
//                 'searchreplace', 'table', 'wordcount'
//               ],
//               toolbar: 'insertfile a11ycheck undo redo | bold italic | forecolor backcolor | codesample | alignleft aligncenter alignright alignjustify | bullist numlist | link image',
//               image_title: true,
//               automatic_uploads: true,
//               file_picker_types: 'image',
//               image_uploadtab: true,
//               file_picker_callback: (cb, value, meta) => {
//                 if (meta.filetype === 'image') {
//                   const input = document.createElement('input');
//                   input.setAttribute('type', 'file');
//                   input.setAttribute('accept', 'image/*');
//                   input.onchange = function () {
//                     const file = (input.files)[0];
//                     const reader = new FileReader();
//                     reader.onload = function () {
//                       const id = 'blobid' + new Date().getTime();
//                       const blobCache = (window).tinymce.activeEditor.editorUpload.blobCache;
//                       const base64 = (reader.result).split(',')[1];
//                       const blobInfo = blobCache.create(id, file, base64);
//                       blobCache.add(blobInfo);
//                       cb(blobInfo.blobUri(), { title: file.name });
//                     };
//                     reader.readAsDataURL(file);
//                   };
//                   input.click();
//                 }
//               },
//               content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
//             }}
//           /> */}
//           <BundledEditor
//             onInit={(_evt, editor) => editorRef.current = editor}
//             initialValue='<p>This is the initial content of the editor.</p>'
//             init={{
//               height: 500,
//               menubar: 'file edit insert view format table tools help',
//               plugins: [
//                 'a11ychecker', 'advlist', 'anchor', 'autolink', 'help', 'link', 'lists',
//                 'image', 'editimage', 'media', 'powerpaste', 'preview',
//                 'searchreplace', 'table', 'wordcount', 'codesample'
//               ],
//               toolbar:
//                 'undo redo | blocks | bold italic forecolor backcolor | ' +
//                 'alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | ' +
//                 'link image | removeformat | help',
//               image_title: true,
//               automatic_uploads: true,
//               file_picker_types: 'image',
//               image_uploadtab: true,
//               file_picker_callback: (cb, value, meta) => {
//                 if (meta.filetype === 'image') {
//                   const input = document.createElement('input');
//                   input.setAttribute('type', 'file');
//                   input.setAttribute('accept', 'image/*');
//                   input.onchange = function () {
//                     const file = (input.files)[0];
//                     const reader = new FileReader();
//                     reader.onload = function () {
//                       const id = 'blobid' + new Date().getTime();
//                       const blobCache = (window).tinymce.activeEditor.editorUpload.blobCache;
//                       const base64 = (reader.result).split(',')[1];
//                       const blobInfo = blobCache.create(id, file, base64);
//                       blobCache.add(blobInfo);
//                       cb(blobInfo.blobUri(), { title: file.name });
//                     };
//                     reader.readAsDataURL(file);
//                   };
//                   input.click();
//                 }
//               },
//               content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
//             }}
//           />




//           {/* Rest of your form remains unchanged */}
//           {/* Custom RSVP Fields */}
//           <div className="space-y-4">
//             <label className="text-md font-semibold text-indigo-600">Custom RSVP Fields (Optional)</label>
//             {customFields.map((field, index) => (
//               <div key={index} className="bg-gray-50 p-4 border rounded-lg space-y-2">
//                 <input
//                   type="text"
//                   placeholder="Field label (e.g. Phone Number)"
//                   value={field.label}
//                   onChange={(e) => {
//                     const updated = [...customFields];
//                     updated[index].label = e.target.value;
//                     setCustomFields(updated);
//                   }}
//                   className="w-full px-3 text-black py-2 border rounded"
//                 />

//                 <select
//                   value={field.type}
//                   onChange={(e) => {
//                     const updated = [...customFields];
//                     updated[index].type = e.target.value;
//                     if (e.target.value.startsWith('checkbox')) {
//                       updated[index].options = ["Option 1"];
//                     } else {
//                       updated[index].options = [];
//                     }
//                     setCustomFields(updated);
//                   }}
//                   className="w-full px-3 py-2 border text-black rounded"
//                 >
//                   <option value="text">Text</option>
//                   <option value="number">Number</option>
//                   <option value="checkbox-multiple">Checkbox (Multiple Select)</option>
//                   <option value="checkbox-single">Checkbox (Single Select)</option>
//                 </select>

//                 {(field.type === "checkbox-multiple" || field.type === "checkbox-single") && (
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-600">Options</label>
//                     {field.options.map((opt, optIdx) => (
//                       <div key={optIdx} className="flex gap-2 items-center">
//                         <input
//                           type="text"
//                           placeholder={`Option ${optIdx + 1}`}
//                           value={opt}
//                           onChange={(e) => {
//                             const updated = [...customFields];
//                             updated[index].options[optIdx] = e.target.value;
//                             setCustomFields(updated);
//                           }}
//                           className="flex-1 px-3 py-2 text-black border rounded"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => {
//                             const updated = [...customFields];
//                             updated[index].options.splice(optIdx, 1);
//                             setCustomFields(updated);
//                           }}
//                           className="text-red-500 text-sm"
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     ))}

//                     <button
//                       type="button"
//                       onClick={() => {
//                         const updated = [...customFields];
//                         updated[index].options.push(`Option ${field.options.length + 1}`);
//                         setCustomFields(updated);
//                       }}
//                       className="text-indigo-600 text-sm"
//                     >
//                       + Add Option
//                     </button>
//                   </div>
//                 )}

//                 <button
//                   type="button"
//                   onClick={() => {
//                     const updated = [...customFields];
//                     updated.splice(index, 1);
//                     setCustomFields(updated);
//                   }}
//                   className="text-red-500 text-sm underline"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}

//             <button
//               type="button"
//               onClick={() =>
//                 setCustomFields([...customFields, { label: "", type: "text", options: [] }])
//               }
//               className="text-indigo-600 font-medium text-sm"
//             >
//               + Add Field
//             </button>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full px-4 py-2 text-white rounded-lg transition-all duration-200 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
//           >
//             {loading ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Submit'}
//           </button>

//           {status === 'error' && (
//             <p className="text-center text-red-500 text-sm">Something went wrong. Please try again.</p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



// 'use client';

// import axios from "axios";
// import { useRef, useState } from "react";
// import BundledEditor from "@/components/editor/minimal-tiptap/BundledEditor";

// function Dashboard() {
//   const [sheetLink, setSheetLink] = useState("");
//   const [subject, setSubject] = useState("You're Invited! RSVP Now for Our Exclusive Event 🎉");
//   const editorRef = useRef(null);
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState("");
//   const [customFields, setCustomFields] = useState([
//     { label: "", type: "text", options: [] }
//   ]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus("");

//     const sheetIdMatch = sheetLink.match(/\/d\/([a-zA-Z0-9-_]+)/);
//     const sheetId = sheetIdMatch ? sheetIdMatch[1] : null;

//     if (!sheetId) {
//       alert("Invalid Google Sheet Link. Please provide a correct link.");
//       setLoading(false);
//       return;
//     }

//     try {
//       // Get the HTML content from the TinyMCE editor
//       const template = editorRef.current.getContent();
//       console.log("template", template);


//       const response = await axios.post(
//         process.env.NEXT_PUBLIC_GSCRIPT_URL,
//         {
//           sheetId,
//           template,
//           subject,
//           customFields
//         },
//         {
//           headers: {
//             'Content-Type': 'text/plain;charset=utf-8',
//           }
//         }
//       );
//       setStatus("sent");
//     } catch (error) {
//       console.error('Error:', error);
//       setStatus("error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4" aria-hidden="false">
//       <div className="w-full max-w-4xl p-8 space-y-6 bg-white rounded-2xl shadow-xl">
//         <h2 className="text-3xl font-bold text-center text-indigo-700">Submit Your Google Sheet</h2>

//         <div className="space-y-3">
//           <p className="text-sm text-gray-600 text-center">
//             📋 Please make sure your Google Sheet contains the following columns:
//             <br />
//             <span className="font-semibold text-gray-800">Name, Email, Template, Email Status, Responded, Response</span>
//           </p>

//           <div className="w-full border rounded-lg overflow-hidden">
//             <img
//               src="/excel-preview.png"
//               alt="Google Sheet Example"
//               className="w-full t-scale object-cover"
//             />
//           </div>
//         </div>

//         <div>
//           <p className="text-sm text-gray-600 text-center">
//             Have a look at our <a href="https://docs.google.com/spreadsheets/d/1J3Z9g3RWVcmikdmERmxV-8tg2wrM786HUFqJ0i02qog/edit?usp=sharing"
//               target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Google Sheet Template</a> for reference.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5 pt-2">
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Google Sheet Link</label>
//             <input
//               type="url"
//               placeholder="https://docs.google.com/..."
//               value={sheetLink}
//               onChange={(e) => setSheetLink(e.target.value)}
//               required
//               className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Email Subject</label>
//             <input
//               type="text"
//               placeholder="You're Invited!"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               required
//               className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Email Template</label>
//             <BundledEditor
//               onInit={(_evt, editor) => editorRef.current = editor}
//               initialValue='<p>This is the initial content of the editor.</p>'
//               init={{
//                 height: 500,
//                 menubar: 'file edit insert view format table tools help',
//                 plugins: [
//                   'image', 'editimage', 'media'
//                 ],
//                 // plugins: [
//                 //   'a11ychecker', 'advlist', 'anchor', 'autolink', 'help', 'link', 'lists',
//                 //   'image', 'editimage', 'media', 'powerpaste', 'preview',
//                 //   'searchreplace', 'table', 'wordcount', 'codesample'
//                 // ],
//                 toolbar:
//                   'undo redo | blocks | bold italic forecolor backcolor | ' +
//                   'alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | ' +
//                   'link image | removeformat | help',
//                 image_title: true,
//                 automatic_uploads: true,
//                 file_picker_types: 'image',
//                 image_uploadtab: true,
//                 file_picker_callback: (cb, value, meta) => {
//                   if (meta.filetype === 'image') {
//                     const input = document.createElement('input');
//                     input.setAttribute('type', 'file');
//                     input.setAttribute('accept', 'image/*');
//                     input.onchange = function () {
//                       const file = (input.files)[0];
//                       const reader = new FileReader();
//                       reader.onload = function () {
//                         const id = 'blobid' + new Date().getTime();
//                         const blobCache = (window).tinymce.activeEditor.editorUpload.blobCache;
//                         const base64 = (reader.result).split(',')[1];
//                         const blobInfo = blobCache.create(id, file, base64);
//                         blobCache.add(blobInfo);
//                         cb(blobInfo.blobUri(), { title: file.name });
//                       };
//                       reader.readAsDataURL(file);
//                     };
//                     input.click();
//                   }
//                 },
//                 content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
//               }}
//             />
//           </div>

//           {/* Custom RSVP Fields */}
//           <div className="space-y-4">
//             <label className="text-md font-semibold text-indigo-600">Custom RSVP Fields (Optional)</label>
//             {customFields.map((field, index) => (
//               <div key={index} className="bg-gray-50 p-4 border rounded-lg space-y-2">
//                 <input
//                   type="text"
//                   placeholder="Field label (e.g. Phone Number)"
//                   value={field.label}
//                   onChange={(e) => {
//                     const updated = [...customFields];
//                     updated[index].label = e.target.value;
//                     setCustomFields(updated);
//                   }}
//                   className="w-full px-3 text-black py-2 border rounded"
//                 />

//                 <select
//                   value={field.type}
//                   onChange={(e) => {
//                     const updated = [...customFields];
//                     updated[index].type = e.target.value;
//                     if (e.target.value.startsWith('checkbox')) {
//                       updated[index].options = ["Option 1"];
//                     } else {
//                       updated[index].options = [];
//                     }
//                     setCustomFields(updated);
//                   }}
//                   className="w-full px-3 py-2 border text-black rounded"
//                 >
//                   <option value="text">Text</option>
//                   <option value="number">Number</option>
//                   <option value="checkbox-multiple">Checkbox (Multiple Select)</option>
//                   <option value="checkbox-single">Checkbox (Single Select)</option>
//                 </select>

//                 {(field.type === "checkbox-multiple" || field.type === "checkbox-single") && (
//                   <div className="space-y-2">
//                     <label className="text-sm font-medium text-gray-600">Options</label>
//                     {field.options.map((opt, optIdx) => (
//                       <div key={optIdx} className="flex gap-2 items-center">
//                         <input
//                           type="text"
//                           placeholder={`Option ${optIdx + 1}`}
//                           value={opt}
//                           onChange={(e) => {
//                             const updated = [...customFields];
//                             updated[index].options[optIdx] = e.target.value;
//                             setCustomFields(updated);
//                           }}
//                           className="flex-1 px-3 py-2 text-black border rounded"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => {
//                             const updated = [...customFields];
//                             updated[index].options.splice(optIdx, 1);
//                             setCustomFields(updated);
//                           }}
//                           className="text-red-500 text-sm"
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     ))}

//                     <button
//                       type="button"
//                       onClick={() => {
//                         const updated = [...customFields];
//                         updated[index].options.push(`Option ${field.options.length + 1}`);
//                         setCustomFields(updated);
//                       }}
//                       className="text-indigo-600 text-sm"
//                     >
//                       + Add Option
//                     </button>
//                   </div>
//                 )}

//                 <button
//                   type="button"
//                   onClick={() => {
//                     const updated = [...customFields];
//                     updated.splice(index, 1);
//                     setCustomFields(updated);
//                   }}
//                   className="text-red-500 text-sm underline"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}

//             <button
//               type="button"
//               onClick={() =>
//                 setCustomFields([...customFields, { label: "", type: "text", options: [] }])
//               }
//               className="text-indigo-600 font-medium text-sm"
//             >
//               + Add Field
//             </button>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full px-4 py-2 text-white rounded-lg transition-all duration-200 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
//           >
//             {loading ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Submit'}
//           </button>

//           {status === 'error' && (
//             <p className="text-center text-red-500 text-sm">Something went wrong. Please try again.</p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



'use client';

import axios from "axios";
import { useRef, useState } from "react";
import BundledEditor from "@/components/editor/minimal-tiptap/BundledEditor";
import { uploadImageToCloudinary } from "../utils/cloudinary";

function Dashboard() {
  const [sheetLink, setSheetLink] = useState("");
  const [subject, setSubject] = useState("You're Invited! RSVP Now for Our Exclusive Event 🎉");
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [customFields, setCustomFields] = useState([
    { label: "", type: "text", options: [] }
  ]);
  const [imageMap, setImageMap] = useState(new Map());

  // Enhanced file picker callback with Cloudinary upload
  // const filePickerCallback = async (callback, value, meta) => {
  //   if (meta.filetype === 'image') {
  //     const input = document.createElement('input');
  //     input.setAttribute('type', 'file');
  //     input.setAttribute('accept', 'image/*');

  //     input.onchange = async () => {
  //       const file = input.files[0];
  //       const placeholderId = `uploading_${Date.now()}`;

  //       // 1. Insert temporary placeholder
  //       callback(placeholderId, { title: file.name });

  //       try {
  //         // 2. Upload to Cloudinary
  //         const imageUrl = await uploadImageToCloudinary(file);
  //         console.log("Image URL:", imageUrl);


  //         // 3. Replace placeholder with actual image
  //         const content = editorRef.current.getContent();
  //         const newContent = content.replace(
  //           `src="${placeholderId}"`,
  //           `src="${imageUrl}"`
  //         );
  //         console.log("New Content:", newContent);
  //         // Update the editor content with the new image URL

  //         editorRef.current.setContent(newContent);

  //         // 4. Update image tracking
  //         setImageMap(prev => {
  //           const newMap = new Map(prev);
  //           newMap.set(imageUrl, { status: 'uploaded', file });
  //           return newMap;
  //         });
  //       } catch (error) {
  //         console.error('Upload failed:', error);
  //         // Remove failed upload placeholder
  //         const errorContent = editorRef.current.getContent();
  //         editorRef.current.setContent(
  //           errorContent.replace(`src="${placeholderId}"`, '')
  //         );
  //       }
  //     };

  //     input.click();
  //   }
  // };
  const filePickerCallback = async (callback, value, meta) => {
    if (meta.filetype === 'image') {
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.setAttribute('multiple', 'multiple'); // Allow multiple files

      input.onchange = async () => {
        const files = Array.from(input.files);

        for (const file of files) {
          const placeholderId = `uploading_${Date.now()}_${Math.random().toString(36).slice(2)}`;
          const placeholderUrl = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==`;

          // Insert a placeholder transparent image first
          callback(placeholderUrl, { title: file.name });

          try {
            const imageUrl = await uploadImageToCloudinary(file);
            console.log("Image URL:", imageUrl);

            // Replace all instances of the placeholder URL with the uploaded image
            const currentContent = editorRef.current.getContent();
            // const updatedContent = currentContent.replaceAll(placeholderUrl, imageUrl);
            const animatedImageHTML = `<img src="${imageUrl}" style="width:20px; height:20px; transition: width 1s ease, height 1s ease;" onload="this.style.width='100px'; this.style.height='100px';" />`;

            const updatedContent = currentContent.replaceAll(
              `<img src="${placeholderUrl}"`,
              animatedImageHTML.replace(/"/g, '\\"')
            );
            editorRef.current.setContent(updatedContent);

            setImageMap(prev => {
              const newMap = new Map(prev);
              newMap.set(imageUrl, { status: 'uploaded', file });
              return newMap;
            });
          } catch (error) {
            console.error('Upload failed:', error);
            // Optionally remove the placeholder if upload fails
            const errorContent = editorRef.current.getContent();
            editorRef.current.setContent(
              errorContent.replaceAll(placeholderUrl, '')
            );
          }
        }
      };

      input.click();
    }
  };


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

    try {
      // Get final HTML with all Cloudinary URLs
      const template = editorRef.current.getContent();

      // Verify all images are properly uploaded
      const doc = new DOMParser().parseFromString(template, 'text/html');
      const images = doc.querySelectorAll('img');

      for (const img of images) {
        if (img.src.startsWith('data:')) {
          throw new Error("Some images are still uploading. Please wait.");
        }
      }

      const response = await axios.post(
        process.env.NEXT_PUBLIC_GSCRIPT_URL,
        {
          sheetId,
          template,
          subject,
          customFields
        },
        {
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          }
        }
      );
      setStatus("sent");
    } catch (error) {
      console.error('Error:', error);
      setStatus(error.message || "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4" aria-hidden="false">
      <div className="w-full max-w-4xl p-8 space-y-6 bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700">Submit Your Google Sheet</h2>
        <div className="space-y-3">
          <p className="text-sm text-gray-600 text-center">
            📋 Please make sure your Google Sheet contains the following columns:
            <br />
            <span className="font-semibold text-gray-800">Name, Email, Template, Email Status, Responded, Response</span>
          </p>

          <div className="w-full border rounded-lg overflow-hidden">
            <img
              src="/excel-preview.png"
              alt="Google Sheet Example"
              className="w-full t-scale object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 text-center">
            Have a look at our <a href="https://docs.google.com/spreadsheets/d/1J3Z9g3RWVcmikdmERmxV-8tg2wrM786HUFqJ0i02qog/edit?usp=sharing"
              target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Google Sheet Template</a> for reference.
          </p>
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
            <BundledEditor
              onInit={(_evt, editor) => editorRef.current = editor}
              initialValue='<p>This is the initial content of the editor.</p>'
              init={{
                height: 500,
                menubar: 'file edit insert view format table tools help',
                plugins: ['image', 'media', 'lists', 'link'],
                toolbar:
                  'undo redo | blocks | bold italic forecolor backcolor | ' +
                  'alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | ' +
                  'link image | removeformat | help',
                image_title: true,
                automatic_uploads: false, // We handle uploads manually
                file_picker_types: 'image',
                file_picker_callback: filePickerCallback,
                images_upload_handler: async (blobInfo, progress) => {
                  try {
                    const file = new File([blobInfo.blob()], blobInfo.filename(), {
                      type: blobInfo.blob().type
                    });
                    return await uploadImageToCloudinary(file);
                  } catch (error) {
                    console.error('Upload failed:', error);
                    throw error;
                  }
                },
                content_style: `
                  body { 
                    font-family: Helvetica, Arial, sans-serif; 
                    font-size: 16px;
                    line-height: 1.6;
                    color: #333;
                  }
                  img {
                    max-width: 100%;
                    height: auto;
                  }
                `,
                paste_data_images: true
              }}
            />
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
            className={`w-full px-4 py-2 text-white rounded-lg transition-all duration-200 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
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