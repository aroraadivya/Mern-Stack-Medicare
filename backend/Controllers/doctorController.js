// import Doctor from "../models/DoctorSchema.js";

// export const updateDoctor = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const updateDoctor = await Doctor.findByIdAndUpdate(
//       id,
//       { $set: req.body },
//       { new: true }
//     );

//     res
//       .status(200)
//       .json({
//         success: true,
//         message: "Successfully Updated",
//         data: updateDoctor,
//       });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Failed to update" });
//   }
// };

// export const deleteDoctor = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const updateDoctor = await Doctor.findByIdAndDelete(id);

//     res.status(200).json({
//       success: true,
//       message: "Successfully Deleted",
//     });
//   } catch (err) {
//     res.status(500).json({ success: false, message: "Failed to delete" });
//   }
// };

// export const getSingleDoctor = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const doctor = await Doctor.findById(id).select("-password");
//     res.status(200).json({
//       success: true,
//       message: "Doctor found",
//       data: doctor,
//     });
//   } catch (err) {
//     res.status(404).json({ success: false, message: "No Doctor found" });
//   }
// };

// export const getAllDoctor = async (req, res) => {
//   try {
//     const Doctors = await Doctor.find({});

//     res.status(200).json({
//       success: true,
//       message: "Doctors found",
//       data: users,
//     });
//   } catch (err) {
//     res.status(404).json({ success: false, message: "Not found" });
//   }
// };

import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updatedDoctor,
    });
  } catch (err) {
    console.error("Error updating doctor:", err); // Log error for debugging
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (err) {
    console.error("Error deleting doctor:", err); // Log error for debugging
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id).select("-password");
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "No Doctor found" });
    }

    res.status(200).json({
      success: true,
      message: "Doctor found",
      data: doctor,
    });
  } catch (err) {
    console.error("Error fetching single doctor:", err); // Log error for debugging
    res.status(500).json({ success: false, message: "Failed to fetch doctor" });
  }
};

export const getAllDoctor = async (req, res) => {
  try {
    const doctors = await Doctor.find({}); // Renamed to `doctors` for consistency

    res.status(200).json({
      success: true,
      message: "Doctors found",
      data: doctors,
    });
  } catch (err) {
    console.error("Error fetching all doctors:", err); // Log error for debugging
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch doctors" });
  }
};
