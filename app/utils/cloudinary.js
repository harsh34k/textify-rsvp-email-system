// export const uploadImageToCloudinary = async (file) => {
//     console.log("Uploading image to Cloudinary...");

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
//     formData.append('folder', 'email_templates');
//     console.log("Form data:", formData);
//     console.log("File:", file);


//     const response = await fetch(
//         `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
//         {
//             method: 'POST',
//             body: formData,
//         }
//     ).then((res) => {
//         console.log("Response:", res);
//         return res;
//     });

//     if (!response.ok) {
//         throw new Error('Image upload failed');
//     }

//     const data = await response.json();
//     return data.secure_url;
// };
export const uploadImageToCloudinary = async (file) => {
    console.log("Uploading image to Cloudinary...");

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', 'email_templates');

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
                method: 'POST',
                body: formData,
            }
        );

        const data = await response.json();
        console.log("Cloudinary response data:", data);

        return data.secure_url;
    } catch (error) {
        console.error("Cloudinary upload failed:", error);
        throw new Error('Image upload failed');
    }
};
