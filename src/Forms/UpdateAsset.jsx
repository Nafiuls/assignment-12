import { useParams } from "react-router-dom"
import SectionTitle from "../Shared/SectionTitle"
import { useQuery } from "@tanstack/react-query"
import UseAxios from "../Hooks/UseAxios"
import { Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { useState } from "react"
import { toast } from "react-toastify"


const UpdateAsset = () => {
  const [type, setType] = useState()
  const axiosCommon = UseAxios()
  const { id } = useParams()
  // load asset data with id
  const { data: asset = {}, isPending, refetch } = useQuery({
    queryKey: ['asset', id],
    queryFn: async () => {
      const res = await axiosCommon(`/assets/${id}`)
      return res.data
    }
  })
  // handle update function
  const handleUpdate = e => {
    e.preventDefault()
    const form = e.target
    const name = form.productName.value
    const quantity = form.quantity.value
    const productType = type
    const updateInfo = { name, quantity, productType }



    // update the document 
    axiosCommon.put(`/assetUpdate/${id}`, updateInfo)
      .then(res => {
        if (res.data.modifiedCount) {
          toast.success('Asset updated successfully')
          refetch()
        }
      })
  }
  return (
    <div className="min-h-screen">
      <SectionTitle heading={'update asset'} />
      {/* update form to update assets */}

      <form onSubmit={handleUpdate} className="max-w-[35%] flex flex-col gap-5 mx-auto border-[2px] rounded p-5">
        <FormControl>
          <FormLabel>Product Name</FormLabel>
          <Input type="text" defaultValue={asset.productName} name="productName" placeholder="Write product name Here"></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Product Type</FormLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)} placeholder="select options">
            <option value="returnable">Returnable</option>
            <option value="nonReturnable">Non Returnable</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Product Quantity</FormLabel>
          <Input type="number" defaultValue={asset.quantity} name="quantity" placeholder="Product Quantity"></Input>
        </FormControl>
        <Button type="submit" bgColor={"black"} color={"white"} _hover={{ color: 'black', bgColor: 'grey' }}>Update</Button>
      </form>
    </div>
  )
}

export default UpdateAsset