import { Button, Divider, FormControl, FormLabel, Input } from "@chakra-ui/react";
import SectionTitle from "../Shared/SectionTitle";
import UseAuth from "../Hooks/UseAuth";
import { toast } from "react-toastify";
import UseRole from "../Hooks/UseRole";
import SocialLogin from "../SocialLogin/SocialLogin";

export default function Login() {
  const { signIn } = UseAuth()
  const [, , refetch] = UseRole()



  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const pass = form.pass.value
    signIn(email, pass)
      .then(res => {
        toast.success('Sign in successfull')
        refetch()
      })
  }



  return (
    <div>
      <SectionTitle heading={'login'} />
      {/* login form */}
      <form onSubmit={handleSubmit} className="max-w-[35%] flex flex-col gap-5 mx-auto border-[2px] rounded p-5">
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" placeholder="Write Your Email Here"></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="pass" placeholder="Write Your Password Here"></Input>
        </FormControl>
        <Button type="submit" bgColor={"black"} color={"white"} _hover={{ color: 'black', bgColor: 'grey' }}>Login</Button>
        <Divider></Divider>
        <SocialLogin />
      </form>
    </div>
  )
}
