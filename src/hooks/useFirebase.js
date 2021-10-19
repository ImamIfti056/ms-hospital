import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const auth = getAuth();
    const googelProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googelProvider)
        
        // .catch(error => {
        //     console.log(error.message);
        //     setError(error.message);
        // })
    }

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(() => setIsLoading(false))
    }

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                console.log('inside', user);
                setUser(user);
            }
            setIsLoading(false);
        })
    } , [auth])

    return{
        user,
        isLoading,
        error,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase;