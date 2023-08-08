import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import { useRouter } from "next/router";

export const UserContext = createContext()

export function UserContextProvider({ children }) {
    // setting states for users and loading toggles
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    // useeffect to check once if the user has been logged in or not
    useEffect(() => {
        setLoading(true)
        const checkLoggedIn = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user irukaan' + user.displayName)
                setLoading(false)
                setUser(user)
            } else {
                setLoading(false)
                setUser(null)
                router.push('/')
            }
        })
        
        return () => checkLoggedIn()
    }, [])
    
    // finally set all the data in an object and gonna pass on to value of the Provider
    var contextData = {
        user: user,
        theme: 'Light',
        setUser: setUser,
        loading: loading,
        setLoading: setLoading,
    }
    
    return (
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    )
}