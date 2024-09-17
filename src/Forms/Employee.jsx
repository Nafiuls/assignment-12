import { Button, Divider, FormControl, FormLabel, Input, } from "@chakra-ui/react"
import SectionTitle from "../Shared/SectionTitle"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import UseAxios from "../Hooks/UseAxios";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";
import UseRole from "../Hooks/UseRole";

const Employee = () => {
  const { createUser, updateUser } = UseAuth()
  const axiosCommon = UseAxios()
  const [, , refetch] = UseRole()
  const [dob, setDob] = useState(new Date())
  // const handlesubmit form
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    // creating a user
    const name = form.fullName.value
    const image = form.image.value
    const email = form.email.value
    const pass = form.pass.value
    const dateOfBirth = dob
    const role = 'employee'
    createUser(email, pass)
      .then(res => {
        updateUser(name, image)

        // console.log(res.user)
        // after user created post in the database
        const user = {
          name,
          pass,
          dateOfBirth,
          role,
          email,
        }
        axiosCommon.post('/users', user)
          .then(res => {
            if (res.data.insertedId) {
              toast.success('Sign up successfull')
              refetch()
            }
          })

      })
  }
  return (
    <div>
      <SectionTitle heading={'join as employee'} />
      {/* the employee form */}
      <form onSubmit={handleSubmit} className="max-w-[50%] flex flex-col gap-5 mx-auto border-[2px] rounded p-5">
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input type="text" name="fullName" placeholder="Write Your Name Here"></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Profile Picture URL</FormLabel>
          <Input type="text" name="image" placeholder="Profile Picture Live Link"></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" className="" name="email" placeholder="Write Your Email Here"></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="pass" placeholder="Write Your Password Here"></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Date Of Birth</FormLabel>
          <DatePicker selected={dob} onChange={(date) => setDob(date)} />
        </FormControl>
        <Button type="submit" bgColor={"black"} color={"white"} _hover={{ color: 'black', bgColor: 'grey' }}>Sign Up</Button>
        <Divider></Divider>
        <SocialLogin />
      </form>
    </div>
  )
}

export default Employee