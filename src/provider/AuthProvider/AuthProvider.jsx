import PropTypes from 'prop-types';
import { createContext, useEffect, useState} from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, newUser =>{
            setUser(newUser);
            console.log('Current User: ',newUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    },[])

    const allValues = {
        createUser,
        signIn,
        user,
        loading,
    }
    return (
        <AuthContext.Provider value = {allValues}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children: PropTypes.node,
}
export default AuthProvider;