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

//  <div className="relative w-full h-auto flex flex-col-reverse lg:flex-row items-center justify-between">
//             {/* Left Side: Carousel */}
//             <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] relative px-4 lg:px-16">
//                 <Carousel
//                     current={current}
//                     next={next}
//                     prev={prev}
//                     autoSlide={true}
//                     autoSlideInterval={5000}
//                     transitionType="slide"
//                     showDots={false}
//                 >
//                     {cards.map((card) => (
//                         <div
//                             key={card.id}
//                             className="p-0 bg-white rounded-lg shadow-md flex flex-col h-[400px] lg:h-[500px] mx-2 overflow-hidden"
//                         >
//                             <div className="relative w-full h-1/2">
//                                 <Image
//                                     src={card.image}
//                                     alt={card.title}
//                                     className="w-full h-full object-cover rounded-t-lg"
//                                     width={600}
//                                     height={400}
//                                 />
//                             </div>
//                             <div className="p-4 lg:p-6 flex flex-col justify-between text-center flex-grow">
//                                 <h2 className="text-lg lg:text-xl font-bold">{card.title}</h2>
//                                 <p className="text-gray-600 mt-2 flex-grow text-sm lg:text-base">
//                                     {card.description}
//                                 </p>
//                                 <Link href="#" className="inline-flex justify-center items-center mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//                                     View Product
//                                     <FaEye className='mx-2 text-lg' />
//                                 </Link>
//                             </div>
//                         </div>
//                     ))}
//                 </Carousel>

//                 {/* Navigation Buttons */}
//                 <div className="absolute top-1/2 left-2 lg:left-4 transform -translate-y-1/2">
//                     <button
//                         onClick={prev}
//                         className="p-2 bg-white rounded-full shadow hover:bg-gray-200"
//                     >
//                         <MdOutlineNavigateBefore className='text-2xl' />
//                     </button>
//                 </div>
//                 <div className="absolute top-1/2 right-2 lg:right-4 transform -translate-y-1/2">
//                     <button
//                         onClick={next}
//                         className="p-2 bg-white rounded-full shadow hover:bg-gray-200"
//                     >
//                         <MdOutlineNavigateNext className='text-2xl' />
//                     </button>
//                 </div>
//             </div>

//             {/* Right Side: Content */}
//             <div className="w-full lg:w-1/2 h-auto bg-white flex flex-col justify-center p-6 lg:px-8 lg:py-12 text-center lg:text-left">
//                 <div className="flex justify-center lg:justify-start items-center mb-4">
//                     <div className="flex justify-center items-center text-4xl p-2 rounded-full bg-blue-600 text-white">
//                         <AiFillProduct />
//                     </div>
//                     <div>
//                         <h2 className="px-2 font-sans text-3xl font-bold tracking-tight text-blue-600 sm:text-2xl sm:leading-none lg:text-4xl">
//                             Our Products
//                         </h2>
//                     </div>
//                 </div>
//                 {/* <p className="text-gray-600 mb-6 text-sm lg:text-base"> */}
//                 <p className="text-base text-gray-700 md:text-lg lg:text-xl mb-6">
//                     Discover our range of innovative and high-quality products
//                     designed to make your life easier. Browse our collections to
//                     find what suits your needs.
//                 </p>
//                 <div>
//                     <Link
//                         href="/products"
//                         className="inline-flex items-center rounded-lg font-semibold px-6 py-3 transition duration-200 text-white bg-blue-600 hover:bg-blue-700"
//                     >
//                         <span className="mx-2">View All Products</span>
//                         <div className="text-2xl">
//                             <MdNavigateNext />
//                         </div>
//                     </Link>
//                 </div>
//             </div>
//         </div>