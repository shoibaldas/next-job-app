import React from 'react'

const Example = () => {
    return (
        <div>
            {/* <div
                // className="flex transition-transform ease-out duration-500 h-full"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 h-full w-full">
                        {slide}
                    </div>
                ))}
            </div> */}

            {/* Navigation Buttons */}
            {/* <div className="absolute inset-0 bottom-0 flex items-center justify-center p-4">
                <button
                    onClick={prev}
                    className="p-2 rounded-full shadow text-white"
                >
                    <IoIosArrowRoundBack size={40} />
                </button>
                <button
                    onClick={next}
                    className="p-2 rounded-full shadow text-white"
                >
                    <IoIosArrowRoundForward size={40} />
                </button>
            </div> */}
        </div>
    )
}

export default Example

// 'use client';

// import { useState, useEffect } from 'react';

// const Carousel = ({
//     children: slides,
//     current,
//     next,
//     prev,
//     autoSlide = false,
//     autoSlideInterval = 3000,
// }) => {
//     // const [curr, setCurr] = useState(0);

//     // const prev = () => {
//     //     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
//     // }

//     // const next = () => {
//     //     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
//     //     // console.log("Next slide:", curr + 1);
//     // };

//     useEffect(() => {
//         if (!autoSlide || slides.length === 0) return;

//         const slideInterval = setInterval(() => {
//             next();
//         }, autoSlideInterval);

//         return () => clearInterval(slideInterval);
//     }, [autoSlide, autoSlideInterval, slides.length]);

//     //    useEffect(() => {
//     //     console.log("Current slide:", curr);
//     // }, [curr]);

//     return (
//         <div className="overflow-hidden relative h-screen w-full">
//             {slides.map((slide, index) => (
//                 <div
//                     key={index}
//                     className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
//                         }`}
//                 >
//                     {slide}
//                 </div>
//             ))}
//             {/* Pagination Dots */}
//             <div className="absolute bottom-4 right-0 left-0">
//                 <div className="flex items-center justify-center gap-2">
//                     {slides.map((_, i) => (
//                         <div
//                             key={i}
//                             className={`transition-all w-3 h-3 bg-white rounded-full ${current === i ? 'p-2' : 'bg-opacity-50'
//                                 }`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Carousel;

///////////////////////////
// const express = require('express');
// const multer = require('multer');
// const AWS = require('aws-sdk');
// const router = express.Router();

// // Configure AWS S3
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION,
// });

// const s3 = new AWS.S3();

// // Multer setup to handle file upload
// const storage = multer.memoryStorage(); // Use memoryStorage instead of diskStorage
// const upload = multer({ storage: storage });

// // Handle single image upload
// router.post('/upload', upload.single('image'), (req, res) => {
//   const file = req.file; // The file from the form

//   if (!file) {
//     return res.status(400).send('No file uploaded.');
//   }

//   const params = {
//     Bucket: process.env.S3_BUCKET_NAME,
//     Key: `images/${Date.now()}-${file.originalname}`,  // Unique key for each file
//     Body: file.buffer,  // Send the file's buffer directly to S3
//     ContentType: file.mimetype,
//     ACL: 'public-read',  // Set to public-read for publicly accessible files
//   };

//   // Upload the image to S3
//   s3.upload(params, (err, data) => {
//     if (err) {
//       return res.status(500).send('Error uploading file: ' + err.message);
//     }

//     // Return the URL of the uploaded image
//     res.json({ message: 'File uploaded successfully', imageUrl: data.Location });
//   });
// });

// module.exports = router;
///////////////////////////////////////
// import { useForm } from "react-hook-form";
// import { useState } from "react";

// export default function MyForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [image, setImage] = useState(null); // State to store the image file

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.append('name', data.name);  // Text field data
//     formData.append('email', data.email);  // Text field data
//     formData.append('image', image);  // Image file data

//     try {
//       // Make API call to your Node.js backend /upload route
//       const res = await fetch('https://next-job-backend.vercel.app:5000/upload', {  // Assuming the backend is running at this port
//         method: 'POST',
//         body: formData,
//       });

//       if (res.ok) {
//         const responseData = await res.json();
//         console.log('File uploaded successfully:', responseData);
        
//         // You can use the image URL here (responseData.imageUrl)
//         // Save the data to your database as needed

//       } else {
//         console.error('Failed to upload file');
//       }
//     } catch (err) {
//       console.error('Error uploading file:', err);
//     }
//   };

//   const handleImageChange = (event) => {
//     setImage(event.target.files[0]);  // Update the image file in state
//   };

//   return (
//     <div>
//       <h1>Upload Form with File</h1>
//       <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
//         {/* Name */}
//         <label>Name:</label>
//         <input {...register("name", { required: "Name is required" })} />
//         {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

//         {/* Email */}
//         <label>Email:</label>
//         <input
//           type="email"
//           {...register("email", { required: "Email is required" })}
//         />
//         {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

//         {/* Image File */}
//         <label>Upload Image:</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           required
//         />

//         {/* Submit */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
/////////////////////////////////////
// const express = require('express');
// const multer = require('multer');
// const AWS = require('aws-sdk');
// const fs = require('fs');
// const router = express.Router();

// // Configure AWS S3
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: process.env.AWS_REGION,
// });

// const s3 = new AWS.S3();

// // Set up multer storage for file handling
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './uploads'); // Local upload folder
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename
//   },
// });

// const upload = multer({ storage: storage });

// // Handle single image upload
// router.post('/upload', upload.single('image'), (req, res) => {
//   const file = req.file;

//   if (!file) {
//     return res.status(400).send('No file uploaded.');
//   }

//   const params = {
//     Bucket: process.env.S3_BUCKET_NAME,
//     Key: `images/${file.filename}`,  // Unique key for each file
//     Body: fs.createReadStream(file.path),
//     ContentType: file.mimetype,
//     ACL: 'public-read',  // Set to public-read for publicly accessible files
//   };

//   // Upload the image to S3
//   s3.upload(params, (err, data) => {
//     if (err) {
//       return res.status(500).send('Error uploading file: ' + err.message);
//     }

//     // Once uploaded to S3, delete the local file
//     fs.unlinkSync(file.path);

//     // Return the URL of the uploaded image
//     res.json({ message: 'File uploaded successfully', imageUrl: data.Location });
//   });
// });

// module.exports = router;
