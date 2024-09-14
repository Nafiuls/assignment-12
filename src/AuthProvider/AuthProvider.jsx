import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/firebase"

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  // google provider

  const googleProvider = new GoogleAuthProvider()


  // create user with email and password

  const createUser = (email, pass) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, pass)
  }

  // google signIn

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // signin with email and password

  const signIn = (email, pass) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, pass)
  }



  // logout a user 
  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }



  // unsubscribe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
      console.log(currentUser)
    })
    return () => {
      return unsubscribe
    }
  }, [])

  // passing the data here
  const data = {
    user,
    loading,
    createUser,
    googleSignIn,
    signIn,
    logout
  }
  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}
