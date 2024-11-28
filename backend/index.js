import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './Routes/auth.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const crosOptions = {
    origin:true,
};

app.get('/',(req,res)=> {
    res.send('Api is working')
});

// mogoDB connection
mongoose.set('strictQuery', false);
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,   
        });
        console.log('Mongodb databse is connected');

    } catch(err) {
        console.log('Mongodb database connection is failed');
    }
};

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(crosOptions));
app.use('/api/v1/auth', authRoute)

app.listen(port, () => {
    console.log('Server is running on port ' + port);
    connectDB();
});


