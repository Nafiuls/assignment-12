import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/firebase"

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)



  // create user with email and password

  const createUser = (email, pass) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, pass)
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
    logout
  }
  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}
