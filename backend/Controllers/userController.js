import User from "../models/UserSchema.js";

export const updateUser = async(req,res)=>{
    const id = req.params.id;

    try{
        const updateUser = await User.findByIdAndUpdate(id, {$set:req.body}, {new:true});

        res.status(200).json({success:true, message:'Successfully Updated', data:updateUser});
    } catch (err) {
        res.status(500).json({success:false, message:'Failed to update'});
    }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updateUser = await User.findByIdAndDelete(
      id,
    );

    res
      .status(200)
      .json({
        success: true,
        message: "Successfully Deleted",
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(
      id).select("-password");
    res
      .status(200)
      .json({
        success: true,
        message: "User found",
        data: user,
      });
  } catch (err) {
    res.status(404).json({ success: false, message: "No User found" });
  }
};

export const getAllUser = async (req, res) => {

  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      message: "Users found",
      data: users,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

export const getUserProfile = async(req,res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);

    if(!user){
      return res.status(404).json({success:false, message:'User not found'});
    }

    const {password, ...rest} = user._doc;

    res.status(200).json({success:true, message:'Profile info is getting', data:rest});

  } catch (err) {
    res.status(500).json({ success: false, message: "Something went wrong, cannot get" });
  }
};

export const getMyAppointments = async(req, res) => {
  try{

    // step -1:retrieve appointments from booking specific user

    // step -2:extract doctor ids from appointment bookings

    // step -3:retrieve doctors from doctor ids
  } catch (err) {
    
  }
}