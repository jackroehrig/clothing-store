import { createContext, useState, useEffect } from "react";

export const CurrentUser = createContext({})

function CurrentUserProvider({ children }: any){

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const getLoggedInUser = async () => {
            let res = await fetch('http://localhost:4000/authentication/profile', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            let user = await res.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider