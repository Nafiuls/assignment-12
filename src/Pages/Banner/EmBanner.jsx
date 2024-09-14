import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const EmBanner = () => {
  return (
    <div className="h-[500px] bg-black">
      <div className="text-white h-full flex flex-col justify-center items-center space-y-5">
        <h1 className="text-7xl">JOIN AS A EMPLOYEE</h1>
        <p className="text-center max-w-xl">Join your preffered dynamic team! Collaborate with colleagues, contribute to exciting projects ,make request for assets, and grow your career in a supportive environment. Your journey starts here!</p>
        <Link to={'employeeForm'}><Button bgColor={'white'} _hover={{ bg: 'transparent', border: '2px solid white', color: 'white' }}>JOIN AS EMPLOYEE</Button></Link>
      </div>

    </div>
  )
}

export default EmBanner