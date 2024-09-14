import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"

export default function UseAuth() {
  const all = useContext(AuthContext)
  return all
}
