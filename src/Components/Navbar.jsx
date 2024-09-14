import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import UseRole from "../Hooks/UseRole";

export default function Navbar() {
  const { logout, user } = UseAuth()
  const [userInfo] = UseRole()

  return (
    <div>
      <nav className="flex justify-between items-center border-b-2 p-3">
        {/* dynamic logo */}
        <div>
          {userInfo?.companyName ? <><h1 className="text-3xl">{userInfo.companyName}</h1></> : <><h1 className="text-3xl">NEON</h1></>}
        </div>
        {/* dynamic navigation */}
        <div>
          <ul className="text-xl flex items-center gap-4">
            {
              userInfo?.role === 'hr' && (
                <>
                  <ul className="flex items-center gap-5">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'addAsset'}>Add asset</NavLink>
                    <NavLink to={'addEmployee'}>Add employee</NavLink>
                    <NavLink to={'assetList'}>Asset List</NavLink>
                    <NavLink to={'requests'}>All requests</NavLink>
                    <NavLink to={'employeeList'}>Employee List</NavLink>
                  </ul>
                </>
              )
            }
            {
              userInfo?.role === 'employee' && (
                <>
                  <p>The role is employee</p>
                </>
              )
            }
            {
              !userInfo.role && (
                <>
                  <NavLink to={'/'}>home</NavLink>
                  <NavLink to={'/hrForm'}>join as hr</NavLink>
                  <NavLink to={'/employeeForm'}>join as employee</NavLink>
                </>


              )}
          </ul>
        </div>
        {/* dynamic login logout button */}
        <div>
          {
            user ? (
              <Button onClick={logout}>Logout</Button>
            ) : (
              <NavLink to={'login'}><Button>Login</Button></NavLink>
            )
          }
        </div>
      </nav >
    </div >
  )
}
