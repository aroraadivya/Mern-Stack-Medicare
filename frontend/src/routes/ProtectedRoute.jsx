// import React from 'react';
// import { authContext } from '../context/AuthContext';
// import { useContext } from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({children, allowedRoles}) => {

//     const {token, role} = useContext(authContext);

//     const isAllowed = allowedRoles.includes(role);
//     const accessibleRoute = token && isAllowed ? children : <Navigate to='/login' replace={true}/>

//   return accessibleRoute;
// };

// export default ProtectedRoute;

import React from 'react';
import { authContext } from '../context/AuthContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { token, role } = useContext(authContext);

  // Ensure token and role exist, and check if role is allowed
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  if (!allowedRoles.includes(role)) {
    // Redirect to a not authorized or home page if role isn't allowed
    return <Navigate to="/" replace={true} />;
  }

  // If token and role match, render the child component
  return children;
};

export default ProtectedRoute;
