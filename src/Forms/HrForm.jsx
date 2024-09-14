import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import SectionTitle from "../Shared/SectionTitle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import UseAxios from "../Hooks/UseAxios";
import { toast } from "react-toastify";

export default function HrForm() {
  const axiosCommon = UseAxios()
  const { createUser } = UseAuth()
  const [dob, setDob] = useState(new Date())

  // form submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.fullName.value
    const companyName = form.companyName.value
    const logo = form.logo.files[0]
    const email = form.email.value
    const pass = form.pass.value
    const dateOfBirth = dob
    const role = 'hr'

    // creating user here
    createUser(email, pass)
      .then(res => {
        // save to database after login
        const user = {
          name,
          companyName,
          logo,
          email,
          pass,
          dateOfBirth,
          role
        }
        axiosCommon.post('/users', user)
          .then(res => {
            if (res.data.insertedId) {
              // show a toast 
              toast.success('Sign Up successfull')
            }
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        console.log(error)
      })

  }


  return (
    <div>
      <SectionTitle heading={'join as hr'} />
      {/* actual signup form */}
      <form className="max-w-[50%] flex flex-col gap-5 mx-auto border-[2px] rounded p-5" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input type="text" name="fullName" placeholder="Write Your Name Here"></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Company Name</FormLabel>
          <Input type="text" name="companyName" placeholder="Write Your Company Name Here"></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Company Logo</FormLabel>
          <Input type="file" name="logo" placeholder="Select a file"></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" placeholder="Write Your email Here"></Input>
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
      </form>
    </div>

  )
}
