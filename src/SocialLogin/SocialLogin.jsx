import { Button, Center, Text } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"
import UseAuth from "../Hooks/UseAuth"
import UseAxios from "../Hooks/UseAxios"
import { toast } from "react-toastify"
import UseRole from "../Hooks/UseRole"

const SocialLogin = () => {
  const { googleSignIn } = UseAuth()
  const axiosCommon = UseAxios()
  const [, , refetch] = UseRole()

  // handle googl function

  const handleGoogle = () => {
    googleSignIn()
      .then(res => {
        // user information
        const user = {
          name: res.user.displayName,
          email: res.user.email,
          role: 'employee'
        }

        // adding user to database
        axiosCommon.post('/users', user)
        toast.success('sign up successfully')
          .then(res => {
            if (res.data.insertedId) {
              refetch()

            }
          })
          .catch(error => {
            // console.log(error)
            // toast.error('sign up failed')
          })

      })
  }

  return (
    <Button onClick={() => handleGoogle()} w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
      <Center>
        <Text>Sign in with Google</Text>
      </Center>
    </Button>
  )
}

export default SocialLogin