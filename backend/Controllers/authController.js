import User from '../Models/UserSchema.js';
import Doctor from '../Models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import auth from '../Middleware/auth.js';

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15d",
    }
  );
};

export const register = async (req, res)=> {
    
    const {email, password, name, role, photo, gender} = req.body;

    try{
        let user = null

        if(role==='patient'){
            user = await User.findOne({email})
        }
        else if(role==='doctor'){
            user = await Doctor.findOne({email})
        }

        // check if user exists
        if(user) {
            return res.status(400).json({msg: 'User already exists'});
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        if(role==='patient'){
            user = new User({
                name,
                email,
                password: hashedPassword,
                photo,
                gender,
                role,
            });
        }

        if(role==='doctor'){
            user = new Doctor({
                name,
                email,
                password: hashedPassword,
                photo,
                gender,
                role,
            });
        }

        await user.save();

        res.status(200).json({success:true, message:'User created successfully'});

    } catch (err){
        res.status(500).json({success:false, message:'Internal server error'});
    }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Step 1: Find user in both collections
    const patient = await User.findOne({ email });
    const doctor = await Doctor.findOne({ email });

    const user = patient || doctor;

    // Step 2: If user doesn't exist
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    // Step 3: Validate password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid credentials" });
    }

    // Step 4: Generate JWT token
    const token = generateToken(user);

    // Step 5: Prepare response
    const { password: pwd, ...userData } = user._doc;

    res.status(200).json({
      status: true,
      message: "Login successful",
      token,
      data: userData,
      role: user.role,
    });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};