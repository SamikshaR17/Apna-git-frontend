// import React, {useEffect} from 'react';
// import {useNavigate, useRoutes }from"react-router-dom";

// // Pages list
// import Dashboard from './components/dashboard/Dashboard';
// import Profile from './components/user/Profile';
// import Login from './components/auth/Login';
// import Signup from './components/auth/Signup';


// // Auth context
// import {useAuth} from "./authContext";

// const ProjectRoutes=()=>{
//     const {currentUser, setCurrentUser} = useState();

//     // use for navigate
//     const navigate = useNavigate();

//     useEffect(()=>{
//         // is ths userid available?
//         // this value we want to read from local storage
//         // backend madhe jevha user log in karel tevha aapn tyala userid ani token denar ahe, tr te aapn local storage madhe store karu, tyatun shodhu 
//         const userIdFromStorage = localStorage.getItem("userId");

//         // userid available but user logged in nahi ahe
//         if(userIdFromStorage && !currentUser){
//             setCurrentUser(userIdFromStorage);
//         }

//         // if userid available nahi hai and user authentication page pr/signup page pr nahi hai to we need to redirect them to signup page
//         if(!userIdFromStorage && !["/auth", "/signup"].includes(window.location.pathname))
//         {
//             navigate("/auth");
//         }

//         // already logged in & still trying to open login & signup then we need to redirect them to dashboard
//         if(userIdFromStorage && window.location.pathname == '/auth'){
//             navigate("/");
//         }
//     }, [currentUser, navigate, setCurrentUser]); //[currUser, navigate, setCurrUser] isme si kisiki bhi value change hoti hai to rerender hoga 

//     // router
//     let element = useRoutes([
//         {
//             path:"/",
//             element:<Dashboard/>
//         },
//         {
//             path:"/auth",
//             element:<Login/>
//         },
//         {
//             path:"/signup",
//             element:<Signup/>
//         },
//         {
//             path:"/profile",
//             element:<Profile/>
//         },
//     ]);

//     return element;
// }

// export default ProjectRoutes;

import React, { useEffect } from "react";
import {useNavigate, useRoutes} from 'react-router-dom'

// Pages List
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/user/Profile";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

// Auth Context
import { useAuth } from "./authContext";

const ProjectRoutes = ()=>{
    const {currentUser, setCurrentUser} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        const userIdFromStorage = localStorage.getItem("userId");

        if(userIdFromStorage && !currentUser){
            setCurrentUser(userIdFromStorage);
        }

        if(!userIdFromStorage && !["/auth", "/signup"].includes(window.location.pathname))
        {
            navigate("/auth");
        }

        if(userIdFromStorage && window.location.pathname=='/auth'){
            navigate("/");
        }
    }, [currentUser, navigate, setCurrentUser]);

    let element = useRoutes([
        {
            path:"/",
            element:<Dashboard/>
        },
        {
            path:"/auth",
            element:<Login/>
        },
        {
            path:"/signup",
            element:<Signup/>
        },
        {
            path:"/profile",
            element:<Profile/>
        }
    ]);

    return element;
}

export default ProjectRoutes;