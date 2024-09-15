import { useQuery } from "@tanstack/react-query"
import UseAuth from "../Hooks/UseAuth"
import SectionTitle from "../Shared/SectionTitle"
import UseAxios from "../Hooks/UseAxios"
import { Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import { useRef, useState } from "react"
import Hrcard from "../hrcomponents/Hrcard"
const AssetList = () => {
  const sref = useRef()
  const [type, setType] = useState('')
  const [search, setSearch] = useState('')



  const axiosCommon = UseAxios()
  const { user } = UseAuth()
  const email = user?.email
  // fetch assets from the server with the user email
  const { data: assets = [], isPending, refetch } = useQuery({
    queryKey: ['assets', email, type, search],
    queryFn: async () => {
      const res = await axiosCommon(`/assetsList/hr/${email}?type=${type}&search=${search}`)
      return res.data
    }
  })

  const handleSearch = () => {
    setSearch(sref.current.value)
    refetch()
  }


  if (isPending) return <div>Loading...</div>


  return (
    <div className="max-w-6xl mx-auto my-10">
      <SectionTitle heading={'asset list'}></SectionTitle>
      {/* search filter sorting section */}
      <div className=" flex flex-col justify-between items-center lg:flex-row">
        {/* filter */}
        <div>
          <FormControl>
            <FormLabel textAlign={"center"}>Filter by type</FormLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)} placeholder="Select option">
              <option value="returnable">Returnable</option>
              <option value="nonReturnable">Non Returnable</option>
            </Select>
          </FormControl>
        </div>
        {/* serch bar */}

        <div>
          <FormLabel textAlign={"center"}>Search Here</FormLabel>
          <div className="flex items-center justify-center">
            <Input ref={sref} name="search" borderRadius={'none'} placeholder="search here" w={'300px'} ></Input>
            <Button onClick={handleSearch} display={"flex"} justifyItems={"center"} gap={'10px'} borderRadius={'none'} color={"white"} bgColor={"black"} _hover={{ bgColor: "white", color: "black", border: '2px solid black' }}><Search2Icon /> Search</Button>
          </div>
        </div>
        {/* sorting sectionj */}
        <div>
          sort here
        </div>
      </div>
      <div className="my-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* render the assets with the user email */}
        {
          assets.map((asset) =>
            <Hrcard key={asset._id} refetch={refetch} asset={asset} />
          )
        }
      </div>
    </div >
  )
}

export default AssetList