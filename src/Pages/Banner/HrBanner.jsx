import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const HrBanner = () => {
  return (
    <div className="h-[500px] bg-black">
      <div className="text-white h-full flex flex-col justify-center items-center space-y-5">
        <h1 className="text-7xl">JOIN AS A HR</h1>
        <p className="text-center max-w-xl">Become an HR leader today! Manage team growth by adding new members, oversee assets, and ensure smooth operations across departments. Shape the future of your organization with your expertise.</p>
        <Link to={'hrForm'}><Button bgColor={'white'} _hover={{ bg: 'transparent', border: '2px solid white', color: 'white' }}>JOIN AS HR</Button></Link>
      </div>

    </div>
  )
}

export default HrBanner