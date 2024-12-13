import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import auth from "../firebase/firebase"


const useCurrentUser = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            } else {
                setUser(null)
            }
        })
    }, [user])

    return user;
}

export default useCurrentUser;