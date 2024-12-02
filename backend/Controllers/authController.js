// import User from '../Models/UserSchema.js';
// import Doctor from '../Models/DoctorSchema.js';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';

// const generateToken = user => {
//     return jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_key, {
//         expiresIn: '15d'
//     });
// }

// export const register = async (req, res)=> {
    
//     const {email, password, name, role, photo, gender} = req.body;

//     try{
//         let user = null

//         if(role==='patient'){
//             user = await User.findOne({email})
//         }
//         else if(role==='doctor'){
//             user = await Doctor.findOne({email})
//         }

//         // check if user exists
//         if(user) {
//             return res.status(400).json({msg: 'User already exists'});
//         }

//         // hash password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         if(role==='patient'){
//             user = new User({
//                 name,
//                 email,
//                 password: hashedPassword,
//                 photo,
//                 gender,
//                 role,
//             });
//         }

//         if(role==='doctor'){
//             user = new Doctor({
//                 name,
//                 email,
//                 password: hashedPassword,
//                 photo,
//                 gender,
//                 role,
//             });
//         }

//         await user.save();

//         res.status(200).json({success:true, message:'User created successfully'});

//     } catch (err){
//         res.status(500).json({success:false, message:'Internal server error'});
//     }
// };

// export const login = async (req, res)=> {

//     const {email, password} = req.body
//     try{
//         let user = null;

//         const patient = await User.findOne({email})
//         const doctor = await Doctor.findOne({email})

//         if(patient){
//             user = patient;
//         }
//         if(doctor){
//             user = doctor;
//         }

//         // check if user exist or not
//         if(!user){
//             return res.status(404).json({message: 'User not found'});
//         }

//         // comapre password
//         const isPasswordMatch = await bcrypt.compare(password, user.password);

//         if(!isPasswordMatch){
//             return res.status(400).json({status:false, message:'Invalid credentials'});
//         }

//         // get token
//         const token = generateToken(user);

//         const {password, role, appointments, ...rest} = user._doc;

//         res.status(200).json({status:true, message:'Successfully login', token, data:{...rest}, role });

//     } catch (err){
//         res.status(500).json({status:false, message:'Failed to login'});
//     }
// };



import dotenv from 'dotenv';
import User from '../Models/UserSchema.js';
import Doctor from '../Models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Load environment variables
dotenv.config();

// Generate token
const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_key, {
        expiresIn: '15d',
    });
};

// Register function
export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;

    try {
        // Validate role
        if (!['patient', 'doctor'].includes(role)) {
            return res.status(400).json({ success: false, message: 'Invalid role specified' });
        }

        let user = null;

        // Check if user already exists
        if (role === 'patient') {
            user = await User.findOne({ email });
        } else if (role === 'doctor') {
            user = await Doctor.findOne({ email });
        }

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user based on role
        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashedPassword,
                photo,
                gender,
                role,
            });
        } else if (role === 'doctor') {
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

        res.status(200).json({ success: true, message: 'User created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Login function
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = null;

        // Check both Patient and Doctor collections
        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        if (patient) {
            user = patient;
        }
        if (doctor) {
            user = doctor;
        }

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ status: false, message: 'Invalid credentials' });
        }

        // Generate token
        const token = generateToken(user);

        // Destructure user data, excluding sensitive fields
        const { password, role, appointments, ...rest } = user._doc || user;

        res.status(200).json({
            status: true,
            message: 'Successfully logged in',
            token,
            data: { ...rest },
            role,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, message: 'Failed to login' });
    }
};


