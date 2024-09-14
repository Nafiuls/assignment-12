import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import UseRole from "../Hooks/UseRole";

export default function Navbar() {
  const { logout, user } = UseAuth()
  const [userInfo] = UseRole()
  console.log(userInfo)
  return (
    <div>
      <nav className="flex justify-between items-center border-b-2 p-3">
        {/* dynamic logo */}
        <h1 className="text-3xl">NEON</h1>
        {/* dynamic navigation */}
        <div>
          <ul className="text-xl flex items-center gap-4">
            {userInfo?.role === "hr" ?
              <>
                <li>The Hr Is Logged In</li>
              </> :
              <>
                < NavLink to={'/'}>Home</NavLink>
                <NavLink to={'hrForm'}>Join As HR</NavLink>
                <NavLink to={'employeeForm'}>Join As Employee</NavLink>
              </>}
          </ul>
        </div>
        {/* dynamic login logout button */}
        <div>
          {
            user ? (
              <Button onClick={logout}>Logout</Button>
            ) : (
              <NavLink to={'/login'}>Login</NavLink>
            )
          }
        </div>
      </nav >
    </div >
  )
}
