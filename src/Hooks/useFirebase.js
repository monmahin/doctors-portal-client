import { useEffect, useState } from 'react';
import initialFirebase from '../Page/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,GoogleAuthProvider, signInWithPopup,updateProfile,getIdToken} from "firebase/auth";
initialFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password,name,navigate) => {
        setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
          setAuthError('')
          const newUser = { email, diplayName: name };
          setUser(newUser)
          //saveuser to data base
          saveUser(email,name,'POST')
          //send name to firebase after creation
          updateProfile(auth.currentUser, {
              displayName: name
          })
              .then(() => {
          }).catch((error) => {
          });
        navigate('/')
      })
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(()=>setIsLoading(false))  
    }

    const loginUser = (email, password,location,navigate) => {
        
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');  
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(()=>setIsLoading(false))   
    }
    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email,user.displayName,'PUT')
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }
    //observer user state
    useEffect(() => {
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
             getIdToken(user)
                 .then(idToken => {
                     setToken(idToken);
             })
            } else {
              setUser({})
            }
            setIsLoading(false)
        });
        return ()=>unsubscribe
    }, [auth])


    useEffect(() => {
        fetch(`https://cryptic-badlands-02135.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    

    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false))            
    }
    const saveUser = (email, displayName,method) => {
        const user = { email, displayName };
        fetch('https://cryptic-badlands-02135.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    };
};

export default useFirebase;