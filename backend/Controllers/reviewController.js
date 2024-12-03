// import Review from "../models/ReviewSchema.js";
// import Doctor from "../models/DoctorSchema.js";

// // get all reviews
// export const getAllReviews = async(req,res)=>{
//     try{
//         const reviews = await review.find({});
//         res.status(200).json({success:true, message:"Successful", data:reviews});
//     } catch (err) {
//         res.status(404).json({success:false, message:"Not found"})
//     }
// };

// // create review
// export const createReview = async(req,res)=>{
//     if(!req.body.doctor) req.body.doctor = req.params.doctorId;
//     if(!req.body.user) req.body.user = req.user.id;

//     const newReview = new Review(req.body);

//     try {
//         const savedReview = await newReview.save();

//         await Doctor.findByIdAndUpdate(req.body.doctor, {
//             $push:{reviews: savedReview._id}
//         })

//         res
//           .status(200)
//           .json({
//             success: true,
//             message: "Review Submitted",
//             data: savedReview,
//           });
//     } catch(err) {
//         res
//           .status(500)
//           .json({
//             success: false,
//             message: err.message,
//           });
//     }
// }

import Review from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

// Get all reviews
export const getAllReviews = async (req, res) => {
  try {
    // Correct capitalization of the `Review` model
    const reviews = await Review.find({});
    res.status(200).json({
      success: true,
      message: "Successful",
      data: reviews,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Reviews not found",
    });
  }
};

// Create a review
export const createReview = async (req, res) => {
  // Ensure `doctor` and `user` fields are populated correctly
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.user?.id; // `req.user` should be set by authentication middleware

  const newReview = new Review(req.body);

  try {
    // Save the review
    const savedReview = await newReview.save();

    // Update the Doctor to include the new review
    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: savedReview._id },
    });

    res.status(200).json({
      success: true,
      message: "Review submitted successfully",
      data: savedReview,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Failed to submit review: ${err.message}`,
    });
  }
};
