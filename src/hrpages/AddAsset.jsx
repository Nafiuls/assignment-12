import { Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import { useState } from "react"
import UseAxios from "../Hooks/UseAxios"
import UseAuth from "../Hooks/UseAuth"
import { toast } from "react-toastify"
import SectionTitle from "../Shared/SectionTitle"

const AddAsset = () => {
  const [type, setType] = useState()
  const { user } = UseAuth()
  const axiosCommon = UseAxios()



  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const name = form.productName.value
    const number = form.quantity.value
    const quantity = parseInt(number) // converting to integer from string
    console.log(typeof quantity)
    const productType = type
    const ownerEmail = user?.email
    const status = 'In Stock'
    const createdAt = new Date().toLocaleString()
    const productInfo = { name, quantity, productType, createdAt, ownerEmail, status }
    // add on backend data base
    axiosCommon.post('/addAssets', productInfo)
      .then(res => {
        console.log(res.data)
        if (res.data.insertedId) {
          toast.success('Product added successfully')
        }
      })

  }
  return (
    <div className="min-h-screen my-10">
      <SectionTitle heading={'add asset'} />
      <form onSubmit={handleSubmit} className="max-w-[35%] flex flex-col gap-5 mx-auto border-[2px] rounded p-5">
        <FormControl>
          <FormLabel>Product Name</FormLabel>
          <Input type="text" name="productName" placeholder="Write product name Here"></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Product Type</FormLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)} placeholder="Select option">
            <option value="returnable">Returnable</option>
            <option value="nonReturnable">Non Returnable</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Product Quantity</FormLabel>
          <Input type="number" name="quantity" placeholder="Product Quantity"></Input>
        </FormControl>
        <Button type="submit" bgColor={"black"} color={"white"} _hover={{ color: 'black', bgColor: 'grey' }}>Add Asset</Button>
      </form>
    </div>
  )
}

export default AddAsset