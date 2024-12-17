// import Home from '../pages/Home.jsx';
// import Services from '../pages/Services.jsx';
// import Login from '../pages/Login.jsx';
// import Signup from '../pages/Signup.jsx';
// import Contact from "../pages/Contact.jsx";
// import Doctors from "../pages/Doctors/Doctors.jsx";
// import DoctorDetails from "../pages/Doctors/DoctorsDetails.jsx";
// import { Routes, Route } from 'react-router-dom';
// import Myaccount from '../Dashboard/user-account/Myaccount.jsx';
// import Dashboard from '../Dashboard/doctor-account/Dashboard.jsx';
// import ProtectedRoute from './ProtectedRoute.jsx';

// const Routers = () => {
//     return <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/doctors" element={<Doctors />} />
//         <Route path="/doctors/:id" element={<DoctorDetails />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Signup />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['patient']}><Myaccount /></ProtectedRoute>} />
//         <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard /></ProtectedRoute>} />
//     </Routes>
// }

// export default Routers;




import Home from '../pages/Home.jsx';
import Services from '../pages/Services.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import Contact from "../pages/Contact.jsx";
import Doctors from "../pages/Doctors/Doctors.jsx";
import DoctorDetails from "../pages/Doctors/DoctorsDetails.jsx";
import { Routes, Route } from 'react-router-dom';
import Myaccount from '../Dashboard/user-account/Myaccount.jsx';
import Dashboard from '../Dashboard/doctor-account/Dashboard.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<DoctorDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route
                path="/users/profile/me"
                element={
                    <ProtectedRoute allowedRoles={['patient']}>
                        <Myaccount />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/doctors/profile/me"
                element={
                    <ProtectedRoute allowedRoles={['doctor']}>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default Routers;
