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
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { token, role } = useContext(authContext);

  // Check if user is authenticated and their role is allowed
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
