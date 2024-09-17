import { Avatar, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import UseRole from "../Hooks/UseRole";
import { Home, UserPlus, List, PlusSquare, Inbox, Users, LogInIcon, LogOutIcon, User, HomeIcon, Shield, Clipboard, Box, PackagePlus } from "lucide-react";
import UseEmployee from "../Hooks/UseEmployee";

export default function Navbar() {
  const { logout, user } = UseAuth()
  const [userInfo] = UseRole()
  const [data] = UseEmployee()

  return (
    <div>
      <nav className="flex w-full  justify-between items-center border-b-2 p-3">
        {/* dynamic logo */}


        {userInfo?.companyName && < div >
          <h1 className="text-3xl">{userInfo.companyName}</h1>
        </div>}
        {data?.companyName && <>
          <h1 className="text-3xl">{data?.companyName}</h1>
        </>
        }
        {
          !data?.companyName && !userInfo?.companyName && < h1 className="text-3xl">NEON</h1>
        }
        {/* dynamic navigation */}
        <div>
          <ul className="text-xl hidden font-semibold sm:flex items-center space-x-5">
            {/* Navlinks and routes for the HR role */}
            {
              userInfo?.role === 'hr' && (
                <>
                  <ul className="flex items-center gap-5">
                    <NavLink className={'hover:scale-110 transition-all flex items-center gap-2'} to={'/'}>
                      <Home />Home
                    </NavLink>
                    <NavLink className={'hover:scale-110 transition-all flex items-center gap-2 '} to={'addAsset'}>
                      <PlusSquare />Add asset
                    </NavLink>
                    <NavLink className={'hover:scale-110 transition-all flex items-center gap-2'} to={'addEmployee'}>
                      <UserPlus /> Add Employee
                    </NavLink>
                    <NavLink className={'hover:scale-110 transition-all flex items-center gap-2'} to={'assetList'}>
                      <List /> Asset List
                    </NavLink>
                    <NavLink className={'hover:scale-110 transition-all flex items-center gap-2'} to={'requests'}>
                      <Inbox /> Requests
                    </NavLink>
                    <NavLink className={'hover:scale-110 transition-all flex items-center gap-2'} to={'employeeList'}>
                      <Users /> Employee List
                    </NavLink>
                    <NavLink className={'hover:scale-110 transition-all flex items-center gap-2'} to={'profile'}>
                      <User /> Profile
                    </NavLink>
                  </ul>
                </>
              )
            }
            {/* Navlink and routes for the Employee Role */}
            {
              userInfo?.role === 'employee' && (
                <>
                  <NavLink className={'hover:scale-110 transition-all flex items-center gap-2'} to={'/'}>
                    <Home />Home
                  </NavLink>
                  <NavLink className={'hover:scale-110 transition-all flex items-center gap-2'} to={'myAsset'}>
                    <Box />My Assets
                  </NavLink>
                  <NavLink className={'hover:scale-110 transition-all flex items-center gap-2'} to={'myTeam'}>
                    <Users />My Team
                  </NavLink>
                  <NavLink className={'hover:scale-110 transition-all flex items-center gap-2'} to={'requestAsset'}>
                    <PackagePlus />Request Asset
                  </NavLink>
                  <NavLink className={'hover:scale-110 transition-all flex items-center gap-2'} to={'profile'}>
                    <User />Profile
                  </NavLink>

                </>
              )
            }
            {
              !userInfo.role && (
                <>
                  <NavLink className={'flex items-center gap-2'} to={'/'}><HomeIcon />Home</NavLink>
                  <NavLink className={'flex items-center gap-2'} to={'/hrForm'}><Shield /> Join as HR</NavLink>
                  <NavLink className={'flex items-center gap-2'} to={'/employeeForm'}><Clipboard /> Join as Employee</NavLink>
                </>
              )}
          </ul>
        </div>
        {/* dynamic login logout button */}
        <div>
          {
            user ? (
              <div className="flex items-center gap-2">
                <Avatar src={user?.photoURL}></Avatar>
                <Button onClick={logout}><LogOutIcon />Logout</Button>
              </div>
            ) : (
              <NavLink to={'login'}><Button><LogInIcon />Login</Button></NavLink>
            )
          }
        </div>
      </nav >
    </div >
  )
}
