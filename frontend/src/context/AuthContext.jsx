// import { Children, createContext, useContext, useEffect, useReducer } from "react";

// const initialState = {
//     user:null,
//     role:null,
//     token:null,
// };

// export const authContext = createContext(initialState);

// const authreducer = (state, action) => {

//     switch (action.type) {
//         case 'LOGIN_START':
//             return {
//                 user:null,
//                 role:null,
//                 token:null,
//             };

//         case 'LOGIN_SUCCESS':
//             return {
//                 user:action.payload.user,
//                 role:action.payload.role,
//                 token:action.payload.token,
//             };

//         case 'LOGOUT':
//             return {
//                 user:null,
//                 role:null,
//                 token:null,
//             };

//         default:
//             return state;
//     }
// };

// export const authContextProvider = ({Children})=> {
//     const [state, dispatch] = useReducer(authReducer, initialState);

//     return (
//     <authContext.Provider value = {{user:state.user, token:state.token, role:state.role, dispatch}}>
//         {Children}
//     </authContext.Provider>
//     );
// };


import { createContext, useReducer } from "react";

const initialState = {
    user: localStorage.getItem('user') /= undefined ? JSON.parse(localStorage.getItem('user')) : null,
    role: localStorage.getItem('role') || null,
    token: localStorage.getItem('token') || null,
};

// Create the context
export const authContext = createContext(initialState);

// Reducer function
const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                role: null,
                token: null,
            };

        case 'LOGIN_SUCCESS':
            return {
                user: action.payload.user,
                role: action.payload.role,
                token: action.payload.token,
            };

        case 'LOGOUT':
            return {
                user: null,
                role: null,
                token: null,
            };

        default:
            return state;
    }
};

// Context Provider Component
export const AuthContextProvider = ({ children }) => { // Changed `Children` to `children`
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        localScorage.setItem('user', JSON.stringify(state.user));
        localStorage.setItem('token', state.token);
        localStorage.setItem('role', state.role);
    }, [state]);

    return (
        <authContext.Provider
            value={{
                user: state.user,
                token: state.token,
                role: state.role,
                dispatch,
            }}
        >
            {children} {/* Corrected `Children` to `children` */}
        </authContext.Provider>
    );
};
