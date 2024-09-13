import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-evenly items-center">
        {/* dynamic logo */}
        <h1 className="text-3xl">logo</h1>
        {/* dynamic navigation */}
        <div>
          <ul>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'hrForm'}>Join As HR</NavLink>
          </ul>
        </div>
        {/* dynamic login logout button */}
        <div>
          <Button>Log In</Button>
        </div>
      </nav>
    </div>
  )
}
