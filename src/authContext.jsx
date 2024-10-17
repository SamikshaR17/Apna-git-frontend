// // useState => for setting the current user
// // useEffect => run check everytime
// import React, {createContext, useState, useEffect, useContext} from 'react';

// // createContext=> it is a constructor, Context=>the data is present locally
// const AuthContext = createContext();

// // user ka data(jwt token, user ka current id) local storage me store karenge jab user login karega tab
// export const useAuth = ()=>{
//     return useContext(AuthContext);
// }

// // wrap the application
// export const AuthProvider=({children})=>{
//     const [currentUser, setCurrentUser] = useState(null);

//     // user ka check karne ka logic
//     useEffect(()=>{
//         const userId = localStorage.getItem('userId');
//         if(userId){
//             setCurrentUser(userId);
//         }
//     }, []);


//     const value = {
//         currentUser, setCurrentUser
//     }
//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
// }

import React, {createContext, useState, useEffect, useContext} from 'react';

const AuthContext = createContext();

export const useAuth = ()=>{
    return useContext(AuthContext);
}

export const AuthProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(()=>{
        const userId = localStorage.getItem('userId');
        if(userId){
            setCurrentUser(userId);
        }
    }, []);

    const value = {
        currentUser, setCurrentUser
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}